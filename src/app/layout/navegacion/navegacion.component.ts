import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss'],
})
export class NavegacionComponent implements OnInit {
  routerEvents: any;
  mostrar: boolean = false;
  Rutas = [
    '/registrosesion',
    '/homeadmin',
    '/peliculasadmin',
    '/reportes',
    '/inicio',
  ];
  constructor(private router: Router) {
    this.routerEvents = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        // if (event.url === undefined) {
        //   this.mostrar = false;
        // }
        if (
          event.url === '/iniciosesion' ||
          event.url === '/' ||
          event.url === '/registrosesion'
        ) {
          console.log(['acaca']);
          this.mostrar = false;
        } else {
          this.mostrar = true;
        }
        // Prints the current route
        // Eg.- /products
      }
    });
  }

  ngOnInit() {}
}
