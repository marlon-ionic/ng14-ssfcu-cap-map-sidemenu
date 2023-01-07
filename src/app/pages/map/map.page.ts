import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss']
})
export class MapPage implements AfterViewInit {
  @ViewChild('map') mapRef?: ElementRef<HTMLElement>;
  homeMap?: GoogleMap;
  loadingDisplay = true;
  ios = false;
  constructor(private readonly platform: Platform) {
    this.ios = platform.is('ios');
  }

  async ngAfterViewInit(): Promise<void> {
      this.homeMap = await GoogleMap.create({
        id: 'homeMap',
        element: this.mapRef!.nativeElement,
        apiKey: environment.googleMapApiKey,
        forceCreate: true,
        config: {
          center: { lat: -23.571482, lng: -46.6906359 },
          disableDefaultUI: true,
          zoom: 10
        },
      });
  }

}
