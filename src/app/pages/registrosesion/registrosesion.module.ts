import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrosesionPageRoutingModule } from './registrosesion-routing.module';

import { RegistrosesionPage } from './registrosesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrosesionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrosesionPage]
})
export class RegistrosesionPageModule {}
