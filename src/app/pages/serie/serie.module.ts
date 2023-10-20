import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeriePageRoutingModule } from './serie-routing.module';
import { MatIconModule } from '@angular/material/icon';

import { SeriePage } from './serie.page';
import { CorazonComponent } from '../../components/corazon/corazon.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeriePageRoutingModule,
    CorazonComponent,
    MatIconModule,
  ],
  declarations: [SeriePage],
})
export class SeriePageModule {}
