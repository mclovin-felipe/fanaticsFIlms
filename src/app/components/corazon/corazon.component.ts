import { Component, OnInit, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { serie } from 'src/app/assets/series';
import { DatabaseService } from 'src/app/services/db.service';
import { MatButtonModule } from '@angular/material/button';
import { ElementRef, ViewChildren, ViewChild } from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
@Component({
  selector: 'app-corazon',
  templateUrl: './corazon.component.html',
  styleUrls: ['./corazon.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatIconModule],
})
export class CorazonComponent implements OnInit {
  @Input() titulo!: string;
  @Input() tipo!: string;
  @Input() id!: number;
  like: boolean = false;
  constructor(private database: DatabaseService) {}
  async Initializate() {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      const idDatos = parsedUser.email || '';
      if (this.tipo == 'peliculas') {
        this.database.getMegustasPeliculas(idDatos).then((resp) => {
          console.log(resp);
          resp.forEach((element) => {
            if (element == this.id.toString()) {
              this.like = true;
            }
          });
        });
      }
      this.database.getMegustas(idDatos).then((resp) => {
        console.log(resp);
        resp.forEach((element) => {
          if (element == this.id.toString()) {
            this.like = true;
          }
        });
      });
    }
  }
  public open() {
    this.like = !this.like;
    if (this.like) {
      const user = localStorage.getItem('user');
      if (user) {
        const parsedUser = JSON.parse(user);
        const idDatos = parsedUser.email || '';
        if (this.tipo == 'peliculas') {
          this.database.AddFavoritesPeliculas(
            idDatos,
            this.id.toString(),
            this.tipo
          );
        } else {
          this.database.AddFavoritesSeries(
            idDatos,
            this.id.toString(),
            this.tipo
          );
        }
      }
    } else {
      const user = localStorage.getItem('user');
      if (user) {
        const parsedUser = JSON.parse(user);
        const idDatos = parsedUser.email || '';
        if (this.tipo == 'peliculas') {
          this.database.DeleteFavoritesPeliculas(
            idDatos,
            this.id.toString(),
            this.tipo
          );
        } else {
          this.database.DeleteFavoritesSeries(
            idDatos,
            this.id.toString(),
            this.tipo
          );
        }
      }
    }
    console.log(this.titulo);
  }

  ngOnInit() {
    console.log('PRUEBAAA', this.titulo);
    this.Initializate();
  }
}
