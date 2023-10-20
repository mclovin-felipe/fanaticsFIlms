import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/db.service';
// @Component({
//   selector: 'app-homeadmin',
//   templateUrl: './homeadmin.page.html',
//   styleUrls: ['./homeadmin.page.scss'],
// })
// // import { OnInit } from '@angular/core';
// // import { DatabaseService } from 'src/app/services/db.service';
// import { Observable } from 'rxjs';
interface Usuarios {
  id: number;
  rol: string;
  password: string;
  nombre: string;
  email: string;
  desc: string;
  idDatos: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  EDAD: number;
  SeriesFavoritas: string;
  PeliculasFavoritas: string;
  imagen: string;
  megustasPeliculas: string;
  megustasSeries: string;
}
@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.page.html',
  styleUrls: ['./homeadmin.page.scss'],
})
export class HomeadminPage implements OnInit {
  usuarios = [
    { id: 1, nombre: 'Matt Murdock', imagen: '/assets/icon/matt.jpg' },
    { id: 2, nombre: 'Olivia Benson', imagen: '/assets/icon/olivia.jpg' },
    { id: 3, nombre: 'Ross Lynch', imagen: '/assets/icon/ross.jpg' },
    // Agrega más usuarios aquí
  ];
  currentDate: Date = new Date();
  users: Usuarios[] = [];
  constructor(private db: DatabaseService) {}
  async getUsuarios() {
    const usuarios = await this.db.getUsuarios();
    return usuarios;
  }
  async deleteUsuario(id: number) {
    await this.db.deleteUser(id);
    this.users = await this.getUsuarios();
  }
  async ngOnInit() {
    this.db.usuarios.subscribe((resp) => {
      console.log(resp, 'resp');
      this.users = resp;
    });
    this.users = await this.getUsuarios();
    console.log(this.users, 'users');
  }
}
