import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { FindService } from '../services/find/find.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map:any;

  @Input() user:any;
  private initMap(): void {
    this.service.findCoordinates(this.user.location)
      .subscribe((coord:any) => {
        this.map = L.map(this.user.login+'').setView(
          [coord[0].lat, coord[0].lon], 7);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);

        L.marker([coord[0].lat, coord[0].lon]).addTo(this.map);
      });

  }

  constructor(private service: FindService) { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
