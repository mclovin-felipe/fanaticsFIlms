import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { matchValidator } from './formValidator';
import { DatabaseService } from 'src/app/services/db.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrosesion',
  templateUrl: './registrosesion.page.html',
  styleUrls: ['./registrosesion.page.scss'],
})
export class RegistrosesionPage implements OnInit {
  myForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private database: DatabaseService,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(8),
          matchValidator('passwordConfirm', true),
          Validators.pattern(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g
          ),
        ],
      ],
      passwordConfirm: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(8),
          matchValidator('password'),
        ],
      ],
    });
  }

  //Create required field validator for name

  async saveData() {
    const { user, email, password } = this.myForm.value;
    const userData = {
      rol: 'user',
      password,
      idDatos: 0,
      apellidoPaterno: '',
      apellidoMaterno: '',
      EDAD: 0,
      nombre: user,
      email,
    };
    const agregar = await this.database.AgregarUsuario(
      userData.rol,
      userData.password,
      userData.idDatos,
      userData.apellidoPaterno,
      userData.apellidoMaterno,
      userData.EDAD,
      userData.nombre,
      userData.email
    );
    if (agregar) {
      console.log('Usuario agregado');
      localStorage.removeItem('user');
      localStorage.setItem(
        'user',
        JSON.stringify({
          idDatos: agregar,
          email: userData.email,
          nombre: userData.nombre,
          rol: userData.rol,
        })
      );
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 3000);
    } else {
      console.log('Error al agregar usuario');
    }
    console.log(this.myForm.value);
  }
  ngOnInit() {}
}
