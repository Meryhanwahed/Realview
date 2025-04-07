import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-saved-properties',
  imports:[CommonModule],
  templateUrl: './saved-properties.component.html',
  styleUrls: ['./saved-properties.component.css']
})
export class SavedPropertiesComponent {
  savedProperties = [
    { id: 1, title: 'Apartment in Cairo', price: 50000, image: 'assets/house1.jpg' },
    { id: 2, title: 'Villa in Alexandria', price: 120000, image: 'assets/house2.jpg' }
  ];

  removeFromSaved(id: number) {
    this.savedProperties = this.savedProperties.filter(p => p.id !== id);
  }
}
