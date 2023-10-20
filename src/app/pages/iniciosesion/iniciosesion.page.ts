import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, NavController } from '@ionic/angular';
import { Usuarios } from './usuarios';
import { DatabaseService } from 'src/app/services/db.service';
// import { FingerprintService } from 'src/app/services/fingerprint.service';
import {
  type AuthenticateOptions,
  BiometricAuth,
  BiometryErrorType,
  BiometryType,
  type CheckBiometryResult,
  getBiometryName,
  type ResultError,
} from '@aparajita/capacitor-biometric-auth';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.page.html',
  styleUrls: ['./iniciosesion.page.scss'],
})
export class IniciosesionPage implements OnInit {
  myForm!: FormGroup;
  username: string = '';
  password: string = '';
  onLogin: boolean = true;

  constructor(
    private router: Router,
    private toastController: ToastController,
    private fb: FormBuilder,
    private database: DatabaseService
  ) {
    this.myForm = this.fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  async authenticateWithBiometric() {
    try {
      BiometricAuth.authenticate().then((resp) => {
        const user = localStorage.getItem('user');
        if (user) {
          this.router.navigate(['/home']);
        }
      });
      console.log('Authentication successful');
    } catch (error) {
      console.error('Error:', error);
    }
  }
  async registro() {
    this.router.navigate(['/registrosesion']);
  }
  async login() {
    // Aquí puedes implementar la lógica de autenticación
    // Por ahora, vamos a simular un inicio de sesión exitoso

    const resp = (await this.database.LoginUsuario(
      this.username,
      this.password
    )) as Array<object>;
    console.log(resp, 'db login');
    if (resp.length > 0) {
      this.onLogin = false;
      console.log('resp', resp[0]);
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(resp[0]));
      setTimeout(() => {
        this.router.navigate(['/home']);
        this.onLogin = true;
      }, 3000);
    } else {
      const toast = await this.toastController.create({
        message: 'Credenciales incorrectas',
        duration: 2000, // Duración en milisegundos
        position: 'top', // Puedes cambiar la posición a 'bottom', 'middle', etc.
      });
      toast.present();
    }
    // console.log(JSON.stringify(resp), 'aquiiiiii');

    // if (this.username.toLowerCase() in Usuarios) {
    //   console.log(Usuarios[this.username]);
    //   if (Usuarios[this.username].pass === this.password) {
    //     this.onLogin = false;
    //     setTimeout(() => {
    //       this.router.navigate(['/home']);
    //     }, 3000);
    //   } else {
    //     const toast = await this.toastController.create({
    //       message: 'Credenciales incorrectas',
    //       duration: 2000, // Duración en milisegundos
    //       position: 'top', // Puedes cambiar la posición a 'bottom', 'middle', etc.
    //     });
    //     toast.present();
    //   }
    // } else {
    //   console.log('NO EXISTE');
    //   const toast = await this.toastController.create({
    //     message: 'Credenciales incorrectas',
    //     duration: 2000, // Duración en milisegundos
    //     position: 'top', // Puedes cambiar la posición a 'bottom', 'middle', etc.
    //   });
    //   toast.present();
    // }
    // if (this.username === 'vacalola' && this.password === 'vacololo') {
    //   // Redirigir a la página principal o a donde quieras después del inicio de sesión
    //   this.router.navigate(['/home']);
    // } else {
    //   const toast = await this.toastController.create({
    //     message: 'Credenciales incorrectas',
    //     duration: 2000, // Duración en milisegundos
    //     position: 'top' // Puedes cambiar la posición a 'bottom', 'middle', etc.
    //   });
    //   toast.present();
    // }
  }
  async contra() {
    this.router.navigate(['/contra']);
  }

  async ngOnInit() {
    console.log('inicio');
    // this.authenticateWithBiometric();
    const available = await BiometricAuth.checkBiometry();
    console.log(available.isAvailable, 'available');
    const user = localStorage.getItem('user');
    if (user) {
      this.authenticateWithBiometric();
    }
    // console.log(localStorage.getItem('user'), 'usuarios');
    // if (localStorage.getItem('user')) {
    //   this.router.navigate(['/home']);
    // }
  }
}
