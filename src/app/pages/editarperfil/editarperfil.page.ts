import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import {
  Camera,
  CameraResultType,
  CameraSource,
  PermissionStatus,
} from '@capacitor/camera';
import { DatabaseService } from 'src/app/services/db.service';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {
  imagenCapturada: string | undefined = undefined;
  nombre: string = 'Admin';
  apellido: string = 'istrador';
  correo: string = 'admin@yahoo.cl';
  descripcion: string = '';
  genero: string = '';
  series: string = '';
  peliculas: string = '';

  constructor(
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController,
    private database: DatabaseService
  ) {}

  loadPhoto = async () => {
    const permissionStatus = await this.checkAndRequestPermissions();

    if (
      permissionStatus.camera === 'granted' ||
      permissionStatus.photos === 'granted'
    ) {
      try {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.Uri,
          source: CameraSource.Prompt,
        });

        const imageUrl = image.webPath;
        this.imagenCapturada = imageUrl;
        console.log(imageUrl, 'image url');
      } catch (error) {
        console.error('Error loading image', error);
      }
    } else {
      console.error('Permissions are not granted');
    }
  };

  checkAndRequestPermissions = async () => {
    const status = await Camera.checkPermissions();
    if (status.camera === 'prompt' || status.photos === 'prompt') {
      const permissionStatus = await Camera.requestPermissions();
      return permissionStatus;
    }
    return status;
  };

  async guardarCambios() {
    if (!this.nombre || !this.apellido || !this.correo) {
      const alert = await this.alertController.create({
        header: 'campos incompletos',
        message: 'por favor, completa todos los campos',
        buttons: ['aceptar'],
      });

      await alert.present();
      return;
    } else {
      const user = localStorage.getItem('user');
      if (user) {
        const parsedUser = JSON.parse(user);
        this.database.updateUser(
          parsedUser.email,
          this.nombre,
          this.apellido,
          this.descripcion,
          this.peliculas,
          this.series,
          this.imagenCapturada
        );

        const alert = await this.toastController.create({
          header: 'Perfil guardado',
          duration: 1000,
          message: 'Felicitaciones',
          position: 'middle',
        });

        alert.present();
        // setTimeout(() => {
        //   this.router.navigate(['/miperfil']);
        // }, 1200);
        return;
      } else {
        const alert = await this.toastController.create({
          header: 'Error al guardar',
          duration: 1000,
          message: 'Error',
          position: 'middle',
        });

        alert.present();
        return;
      }
    }
  }

  ngOnInit() {
    // this.database.queryRecords().subscribe((res: any[]) => {
    //   console.log(res);
    // });
    interface User {
      id: number;
      rol: string;
      nombre: string;
      apellidoPaterno: string;
      apellidoMaterno: string;
      idDatos: string;
      EDAD: number;
      email: string;
      descripcion: string;
      genero: string;
      SeriesFavoritas: string;
      PeliculasFavoritas: string;
    }

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
        // this.genero = resp.genero;
        this.imagenCapturada = resp.imagen;
        this.series = resp.SeriesFavoritas;
        this.peliculas = resp.PeliculasFavoritas;
      });
    } else {
      console.error('User not found in local stoπrage');
    }
  }
}
