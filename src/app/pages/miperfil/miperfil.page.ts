import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
// import { DataService } from 'src/app/data.service';
import { DatabaseService } from 'src/app/services/db.service';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.page.html',
  styleUrls: ['./miperfil.page.scss'],
})
export class MiperfilPage implements OnInit {
  @ViewChild('button', { read: ElementRef }) button!: ElementRef;
  imagenCapturada: string | undefined = undefined;
  nombre: string = 'Admin';
  apellido: string = 'istrador';
  correo: string = 'admin@yahoo.cl';
  descripcion: string = '';
  genero: string = '';
  series: string = '';
  peliculas: string = '';
  constructor(
    private database: DatabaseService,
    private router: Router,
    private animationCtrl: AnimationController
  ) {}

  async ngOnInit(): Promise<void> {
    // this.dataService.getUser().then((user) => {
    //   console.
    // });
    this.database.usuario.subscribe((resp) => {
      console.log(resp, 'respaqQIIII');
      // this.nombre = resp.nombre;
      // this.apellido = resp.apellidoPaterno;
      // this.correo = resp.email;
      this.descripcion = resp.desc;
      this.imagenCapturada = resp.imagen;
      // // this.genero = resp.genero;
      this.series = resp.SeriesFavoritas;
      this.peliculas = resp.PeliculasFavoritas;
    });
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      console.log(parsedUser.email, 'usuarios');
      this.database.getUser(parsedUser.email).then((resp) => {
        console.log(resp, 'resp');
        console.log(JSON.stringify(resp), 'resp');
        this.nombre = resp.nombre;
        this.apellido = resp.apellidoPaterno;
        this.correo = resp.email;
        this.descripcion = resp.desc;
        this.imagenCapturada = resp.imagen;
        // this.genero = resp.genero;
        this.series = resp.SeriesFavoritas;
        this.peliculas = resp.PeliculasFavoritas;
      });
    } else {
      console.error('User not found in local stoπrage');
    }
  }

  irAEditar() {
    this.router.navigate(['/editarperfil']);
  }

  public pulseButton() {
    const animation = this.animationCtrl
      .create()
      .addElement(this.button.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, boxShadow: '0 0 0 0 rgba(44, 103, 255, 0.4)' },
        { offset: 0.7, boxShadow: '0 0 0 10px rgba(44, 103, 255, 0)' },
        { offset: 1, boxShadow: '0 0 0 0 rgba(44, 103, 255, 0)' },
      ]);

    animation.play();
  }
}
