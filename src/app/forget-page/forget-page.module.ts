import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgetPagePageRoutingModule } from './forget-page-routing.module';

import { ForgetPagePage } from './forget-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgetPagePageRoutingModule
  ],
  declarations: [ForgetPagePage]
})
export class ForgetPagePageModule {}
