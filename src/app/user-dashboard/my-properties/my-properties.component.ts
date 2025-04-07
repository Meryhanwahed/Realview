import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-my-properties',
  imports: [CommonModule],
  templateUrl: './my-properties.component.html',
  styleUrls: ['./my-properties.component.css']
})
export class MyPropertiesComponent {
  properties = [
    { id: 1, title: 'Property in cairo', price: 50000, image: 'assets/house1.jpg' },
    { id: 2, title: 'Property in Alexandria', price: 120000, image: 'assets/house2.jpg' }
  ];

  editProperty(id: number) {
    alert('Edit Property: ' + id);
  }

  deleteProperty(id: number) {
    this.properties = this.properties.filter(p => p.id !== id);
  }
}
