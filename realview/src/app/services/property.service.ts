import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root' // This makes the service available throughout the app
})
export class PropertyService {
  private properties: Property[] = [
    {
      id: 1,
      title: 'Luxury Apartment',
      type: 'Apartment',
      price: 120000,
      location: 'New Cairo, Egypt',
      latitude: 30.0444,
      longitude: 31.2357,
      description: 'A beautiful apartment with city views.',
      images: ['assets/images/property1.jpg']
    },
    {
      id: 2,
      title: 'Modern Villa',
      type: 'Villa',
      price: 250000,
      location: 'Sheikh Zayed, Egypt',
      latitude: 29.9792,
      longitude: 31.1342,
      description: 'Spacious villa with private garden and pool.',
      images: ['assets/images/property2.jpg']
    }
  ];

  constructor() {}

  getProperties(): Observable<Property[]> {
    return of(this.properties); // Simulating API response
  }
}
