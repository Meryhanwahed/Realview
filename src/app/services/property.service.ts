import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root' // هذا يجعل الخدمة متاحة في جميع أنحاء التطبيق
})
export class PropertyService {
  private properties: Property[] = [
    {
      id: 1,
      title: 'شقة فاخرة',
      type: 'شقة',
      price: 120000,
      location: 'القاهرة الجديدة، مصر',
      latitude: 30.0444,
      longitude: 31.2357,
      description: 'شقة جميلة مع إطلالات على المدينة.',
      images: ['assets/images/property1.jpg']
    },
    {
      id: 2,
      title: 'فيلا حديثة',
      type: 'فيلا',
      price: 250000,
      location: 'الشيخ زايد، مصر',
      latitude: 29.9792,
      longitude: 31.1342,
      description: 'فيلا واسعة مع حديقة خاصة ومسبح.',
      images: ['assets/images/property2.jpg']
    }
  ];

  constructor() {}

  getProperties(): Observable<Property[]> {
    return of(this.properties); // محاكاة استجابة API
  }
}
