import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPage } from './map.page';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    MapPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: MapPage
      }
    ])
  ]
})
export class MapModule { }
