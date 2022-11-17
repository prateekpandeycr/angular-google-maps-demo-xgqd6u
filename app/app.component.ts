import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  isSnazzyInfoWindowOpened: boolean = false;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
    });
  }

  mouseEnter(e, text) {
    console.log(e);
    this.markers.forEach((data) => {
      if (data.label === text) {
        data.show = true;
        data.userLocationMarkerAnimation = 'BOUNCE';
      } else {
        data.show = false;
        data.userLocationMarkerAnimation = 'NONE';
      }
    });
  }

  openInfoWindow(e) {
    console.log(e);
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true,
      show: false,
      userLocationMarkerAnimation: 'NONE',
    },
    {
      lat: 74,
      lng: 16,
      label: 'B',
      draggable: false,
      show: false,
      userLocationMarkerAnimation: 'NONE',
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true,
      show: false,
      userLocationMarkerAnimation: 'NONE',
    },
  ];
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  show?: boolean;
  userLocationMarkerAnimation?: string;
}
