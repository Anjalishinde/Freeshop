import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppagePageRoutingModule } from './shoppage-routing.module';

import { ShoppagePage } from './shoppage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppagePageRoutingModule
  ],
  declarations: [ShoppagePage]
})
export class ShoppagePageModule {}
