import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { DatabaseService } from './services/db.service';
import { Router } from '@angular/router';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  admin = false;
  constructor(private database: DatabaseService, private router: Router) {
    this.iniApp();
  }
  async logout() {
    localStorage.removeItem('user');

    this.router.navigate(['/iniciar']);
  }
  async iniApp() {
    await this.database.initializPligin();
    const user = localStorage.getItem('user');
    console.log(user);
    this.database.admin.subscribe((resp) => {
      console.log(resp, 'ADMINNNN');
      if (resp) {
        this.admin = true;
      } else {
        this.admin = false;
      }
    });
    // if (user) {
    //   const parsedUser = JSON.parse(user);
    //   const rol = parsedUser.rol || '';
    //   if (rol === 'admin') {
    //     this.admin = true;
    //   }
    // }
  }
}
