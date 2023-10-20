import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MilistaPageRoutingModule } from './milista-routing.module';

import { MilistaPage } from './milista.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MilistaPageRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [MilistaPage],
})
export class MilistaPageModule {}
