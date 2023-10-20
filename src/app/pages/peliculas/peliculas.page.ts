import { Component, OnInit } from '@angular/core';
import { Peliculas } from 'src/app/assets/peliculas';
import { ActivatedRoute, Router } from '@angular/router'; // Importa Router
import { DatabaseService } from 'src/app/services/db.service';

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
  comentarios!: Array<any>;
  comentario: string = '';

  constructor(
    private databse: DatabaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.databse.comentarios.subscribe((resp) => {
      console.log(JSON.stringify(resp), 'resp');
      this.comentarios = resp;
    });
    this.route.queryParams.subscribe((params) => {
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
      this.id = params['id'];
      this.databse.getComentariosPelicula(params['id']).then((resp: any[]) => {
        console.log(resp, 'resp');
        this.comentarios = resp || [];
      });
      // this.comentarios = params['imagen'];;
    });
  }
  async comentar() {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      this.databse.ComentarPelicula(parsedUser.email, this.id, this.comentario);
    }
  }

  goBack() {
    // Utiliza el servicio Router para navegar hacia atrás
    this.router.navigate(['/home']); // Reemplaza '/' con la ruta deseada para volver atrás
  }
}
