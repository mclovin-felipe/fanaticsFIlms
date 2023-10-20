import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IonicModule } from '@ionic/angular';

import { IniciosesionPageRoutingModule } from './iniciosesion-routing.module';

import { IniciosesionPage } from './iniciosesion.page';
import { DialogContentExample } from '../../components/bottom-l/bottom-l.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciosesionPageRoutingModule,
    MatProgressSpinnerModule,
    DialogContentExample,
  ],
  declarations: [IniciosesionPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IniciosesionPageModule {}
