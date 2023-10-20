import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/db.service';
@Component({
  selector: 'app-peliculasadmin',
  templateUrl: './peliculasadmin.page.html',
  styleUrls: ['./peliculasadmin.page.scss'],
})
export class PeliculasadminPage implements OnInit {
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private database: DatabaseService
  ) {
    this.formulario = this.formBuilder.group({
      // ... (otros campos del formulario)
      titulo: ['buenas', [Validators.required]],
      descripcion: ['prueba', [Validators.required]],
      categoria: ['1', [Validators.required]],
      foto: [null],
    });
  }

  ngOnInit() {}

  onSubmit() {
    // Lógica para manejar el envío del formulario
    console.log(this.formulario.value);
    const { titulo, descripcion, categoria, foto } = this.formulario.value;
    console.log(titulo, descripcion, categoria, foto);
    if (categoria === 'pelicula') {
      this.database
        .crearPelicula(titulo, 18, 4, '18/01/2022', 200, descripcion, foto)
        .then((resp) => {
          if (resp) {
            this.presentToast('Formulario enviado con éxito');
          } else {
            this.presentToast('Formulario enviado con éxito');
          }
        });
    } else {
      this.database
        .crearSerie(titulo, 18, 4, '18/01/2022', 2, descripcion, foto)
        .then((resp) => {
          if (resp) {
            this.presentToast('Formulario enviado con éxito');
          } else {
          }
        });
    }
  }

  onFileSelected(event: any) {
    // Este método se llama cuando se selecciona un archivo en el input de tipo archivo
    const file = event.target.files[0];
    // Aquí puedes realizar acciones con el archivo seleccionado
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
