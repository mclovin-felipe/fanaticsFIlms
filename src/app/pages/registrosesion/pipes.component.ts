import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `./registrosesion.page.html`,
  styleUrls: ['./registrosesion.page.scss']
})
export class PipesComponent implements OnInit {

  hoy = new Date(); //Sun Jan 07 2018 01:57:24 GMT+0100 (Hora estándar romance)
  constructor() { }
  ngOnInit(): void {
    this.hoy = new Date()

    throw new Error('Method not implemented.');
  }
}