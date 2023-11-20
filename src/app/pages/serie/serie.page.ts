import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/db.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.page.html',
  styleUrls: ['./serie.page.scss'],
})
export class SeriePage implements OnInit {
  like: string = 'danger';
  titulo: string = '';
  desc: string = '';
  img: string = '';
  id?: number;
  comentarios!: Array<any>;
  comentario: string = '';

  constructor(
    private database: DatabaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onWindowFocus(event: Event): void {
    this.comentario = '';
    this.route?.queryParams.subscribe((params) => {
      this.titulo = params['nombre'];
      this.desc = params['descripcion'];
      if (
        params['imagen'] &&
        params['imagen'].includes &&
        params['imagen'].includes('fakepath')
      ) {
        let imagen = params['imagen'].replace('C:\\fakepath\\', '');
        this.img =
          'http://192.168.1.86:8100/_capacitor_file_/storage/emulated/0/Download/' +
          imagen;
      } else if (params['imagen']) {
        this.img = params['imagen'];
      } else {
        console.error('La propiedad imagen no está definida en los parámetros.');
      }
      this.id = params['id'];
      this.database.getComentariosSerie(params['id']).then((resp: any[]) => {
        this.comentarios = resp || [];
      });
    });
  }

  ngOnInit() {
    this.database.comentarios.subscribe((resp) => {
      this.comentarios = resp;
    });
    this.route?.queryParams.subscribe((params) => {
      this.titulo = params['nombre'];
      this.desc = params['descripcion'];
      if (
        params['imagen'] &&
        params['imagen'].includes &&
        params['imagen'].includes('fakepath')
      ) {
        let imagen = params['imagen'].replace('C:\\fakepath\\', '');
        this.img =
          'http://192.168.1.86:8100/_capacitor_file_/storage/emulated/0/Download/' +
          imagen;
      } else if (params['imagen']) {
        this.img = params['imagen'];
      } else {
        console.error('La propiedad imagen no está definida en los parámetros.');
      }
      this.id = params['id'];
      this.database.getComentariosSerie(params['id']).then((resp: any[]) => {
        this.comentarios = resp || [];
      });
    });
  }

  async comentar() {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      this.database.ComentarSerie(parsedUser.email, this.id, this.comentario);
    }
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}


