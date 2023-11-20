import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/db.service';
import { BehaviorSubject } from 'rxjs';

class ActivatedRouteMock {
  private subject = new BehaviorSubject<{ [key: string]: string }>({});
  readonly queryParams = this.subject.asObservable();

  // Método para emular cambios en los parámetros de la ruta
  pushParams(params: { [key: string]: string }) {
    this.subject.next(params);
  }
}

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {
  like: string = 'danger';
  titulo: string = '';
  desc: string = '';
  img: string = '';
  id?: number;
  comentarios: any[] = [];
  comentario: string = '';

  constructor(
    private database: DatabaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.route.queryParams.subscribe(async (params) => {
      console.log(params['imagen'], 'paramsssss');
      this.titulo = params['nombre'];
      this.desc = params['descripcion'];
      this.img = params['imagen'];

      if (params['imagen'].includes('fakepath')) {
        let imagen = params['imagen'].replace('C:\\fakepath\\', '');
        this.img =
          'http://192.168.1.86:8100/_capacitor_file_/storage/emulated/0/Download/' +
          imagen;
      } else {
        this.img = params['imagen'];
      }

      this.id = +params['id']; // Convertir a número

      try {
        const resp = await this.database.getComentariosPelicula(this.id);
        this.comentarios = resp || [];
      } catch (error) {
        console.error('Error al obtener comentarios:', error);
      }
    });

    try {
      const resp = await this.database.comentarios.toPromise();
      console.log(JSON.stringify(resp), 'resp');
      this.comentarios = resp || [];
    } catch (error) {
      console.error('Error al obtener comentarios:', error);
    }
  }

  async comentar() {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      try {
        await this.database.ComentarPelicula(parsedUser.email, this.id, this.comentario);
      } catch (error) {
        console.error('Error al comentar la película:', error);
      }
    }
  }

  goBack() {
    // Utiliza el servicio Router para navegar hacia atrás
    this.router.navigate(['/home']); // Reemplaza '/' con la ruta deseada para volver atrás
  }
}
