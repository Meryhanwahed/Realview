import { Component, Input, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-map.component.html',
  styleUrls: ['./property-map.component.scss']
})
export class PropertyMapComponent implements AfterViewInit {
  @Input() latitude!: number;
  @Input() longitude!: number;

  ngAfterViewInit() {
    console.log(`Load Map at Lat: ${this.latitude}, Lng: ${this.longitude}`);
  }
}
