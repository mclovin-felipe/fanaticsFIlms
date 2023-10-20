import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeliculasPageRoutingModule } from './peliculas-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { PeliculasPage } from './peliculas.page';
import { CorazonComponent } from '../../components/corazon/corazon.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeliculasPageRoutingModule,
    MatIconModule,
    CorazonComponent,
  ],
  declarations: [PeliculasPage],
})
export class PeliculasPageModule {}
