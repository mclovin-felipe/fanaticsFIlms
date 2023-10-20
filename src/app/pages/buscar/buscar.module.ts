import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { IonicModule } from '@ionic/angular';
import { BuscarPageRoutingModule } from './buscar-routing.module';

import { BuscarPage } from './buscar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarPageRoutingModule,
    MatAutocompleteModule,
  ],
  declarations: [BuscarPage],
})
export class BuscarPageModule {}
