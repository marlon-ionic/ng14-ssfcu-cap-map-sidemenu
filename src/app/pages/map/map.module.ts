import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPage } from './map.page';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MapPage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MapPage
      }
    ])
  ]
})
export class MapModule { }
