import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/db.service';

interface Serie {
  id: number;
  nombre: string;
  adulto: number;
  calificacion: number;
  fechaLanzamiento: string;
  nCapitulos: number;
  descripcion: string;
  imagen: string;
}
interface Pelicula {
  id: number;
  nombre: string;
  adultpo: number;
  calificacion: number;
  fechaLanzamiento: string;
  duracion: number;
  descripcion: string;
  imagen: string;
}
@Component({
  selector: 'app-milista',
  templateUrl: './milista.page.html',
  styleUrls: ['./milista.page.scss'],
})
export class MilistaPage implements OnInit {
  // seriesFavorites: Array<object> = [];
  // peliculasFavorites: Array<object> = [];
  peliculas: Array<object> = [];
  Peliculas: Array<Pelicula> = [];
  Series: Array<Serie> = [];
  constructor(private database: DatabaseService) {}

  // }
  ngOnInit() {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      this.database.megustasSeries.subscribe((resp) => {
        // this.Series = resp;
        let items = [];
        resp.forEach(async (element) => {
          let item = await this.database.getSeriebyId(element);
          console.log(JSON.stringify(item), 'item');
          item.imagen = item.imagen.replace('C:\\fakepath\\', '');
          item.imagen =
            'http://192.168.1.86:8100/_capacitor_file_/storage/emulated/0/Download/' +
            item.imagen;
          items.push(item);
        });
        this.Series = items;
      });

      this.database.megustasPeliculas.subscribe((resp) => {
        let items = [];
        resp.forEach(async (element) => {
          let item = await this.database.getPeliculasbyId(element);
          console.log(JSON.stringify(item), 'item');
          item.imagen = item.imagen.replace('C:\\fakepath\\', '');
          item.imagen =
            'http://192.168.1.86:8100/_capacitor_file_/storage/emulated/0/Download/' +
            item.imagen;

          items.push(item);
        });
        this.Peliculas = items;
      });
      this.database.getMegustas(parsedUser.email).then((resp) => {
        console.log(JSON.stringify(resp), 'mgtas');
        let items = [];
        resp.forEach(async (element) => {
          let item = await this.database.getSeriebyId(element);
          console.log(JSON.stringify(item), 'item');
          item.imagen = item.imagen.replace('C:\\fakepath\\', '');
          item.imagen =
            'http://192.168.1.86:8100/_capacitor_file_/storage/emulated/0/Download/' +
            item.imagen;
          items.push(item);
        });
        this.Series = items;
      });
      this.database.getMegustasPeliculas(parsedUser.email).then((resp) => {
        console.log(JSON.stringify(resp), 'mgtas');
        let items = [];
        resp.forEach(async (element) => {
          let item = await this.database.getPeliculasbyId(element);
          console.log(JSON.stringify(item), 'item');
          item.imagen = item.imagen.replace('C:\\fakepath\\', '');
          item.imagen =
            'http://192.168.1.86:8100/_capacitor_file_/storage/emulated/0/Download/' +
            item.imagen;
          items.push(item);
        });
        this.Peliculas = items;
      });
    }

    // this.GetSeries();
  }
}
