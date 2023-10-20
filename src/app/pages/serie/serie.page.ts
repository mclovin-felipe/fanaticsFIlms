import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Series, serie } from '../../assets/series';
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
    private databse: DatabaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  async likeButton() {}
  onWindowFocus(event: Event): void {
    this.comentario = '';
    this.route.queryParams.subscribe((params) => {
      console.log(params['nombre'], 'paramsssss');
      this.titulo = params['nombre'];
      this.desc = params['descripcion'];
      if (params['imagen'].includes('fakepath')) {
        let imagen = params['imagen'].replace('C:\\fakepath\\', '');
        this.img =
          'http://192.168.1.86:8100/_capacitor_file_/storage/emulated/0/Download/' +
          imagen;
      } else {
        this.img = params['imagen'];
      }
      this.id = params['id'];
      this.databse.getComentariosSerie(params['id']).then((resp: any[]) => {
        console.log(resp, 'resp');
        this.comentarios = resp || [];
      });
      // this.comentarios = params['imagen'];;
    });
  }
  ngOnInit() {
    this.databse.comentarios.subscribe((resp) => {
      console.log(JSON.stringify(resp), 'resp');
      this.comentarios = resp;
    });
    this.route.queryParams.subscribe((params) => {
      console.log(params['nombre'], 'paramsssss');
      this.titulo = params['nombre'];
      this.desc = params['descripcion'];
      if (params['imagen'].includes('fakepath')) {
        let imagen = params['imagen'].replace('C:\\fakepath\\', '');
        this.img =
          'http://192.168.1.86:8100/_capacitor_file_/storage/emulated/0/Download/' +
          imagen;
      } else {
        this.img = params['imagen'];
      }
      this.id = params['id'];
      this.databse.getComentariosSerie(params['id']).then((resp: any[]) => {
        console.log(resp, 'resp');
        this.comentarios = resp || [];
      });
      // this.comentarios = params['imagen'];;
    });
  }
  async comentar() {
    const user = localStorage.getItem('user');
    console.log(user);
    if (user) {
      const parsedUser = JSON.parse(user);
      this.databse.ComentarSerie(parsedUser.email, this.id, this.comentario);
    }
  }
  goBack() {
    // Utiliza el servicio Router para navegar hacia atrás
    this.router.navigate(['/home']); // Reemplaza '/' con la ruta deseada para volver atrás
  }
}
