import { AfterViewInit, Component } from '@angular/core';
import { LatLngExpression, Map, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-recent-concerts',
  standalone: true,
  imports: [],
  templateUrl: './recent-concerts.component.html',
  styles: `#map { height: 600px; }`
})
export class RecentConcertsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const locations: LatLngExpression[] = [
      [3.90313, -76.30532],
      [3.4507, -76.5321],
      [2.4417,-76.6070]
    ]
    const array: any = []
    const map = new Map('map').setView([3.4507, -76.5321], 13);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    locations.forEach((e) => {
      const markeritem = marker(e).addTo(map);
      array.push(
        [markeritem.getLatLng().lat, markeritem.getLatLng().lng]
      )
      map.fitBounds([...array])

    });
  }
}
