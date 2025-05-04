import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private properties: Property[] = [
    {
      id: 1,
      title: 'شقة فاخرة',
      type: 'شقة',
      price: 120000,
      location: 'القاهرة الجديدة، مصر',
      description: 'شقة جميلة مع إطلالات على المدينة.',
      images: ['assets/images/property/images (2).jpg'],
      rooms: 3,
      bathrooms: 2,
      area: 150,
      purpose: 'rent',
      publishDate: '2024-12-01',
      details: 'شقة في الطابق الخامس تطل على الحديقة، قريبة من الخدمات.',
      features: ['تكييف', 'مصعد', 'شرفة'],
      owner: {
        name: 'أحمد علي',
        joinedDate: '2022-01-15'
      }
    },
    {
      id: 2,
      title: 'فيلا حديثة',
      type: 'فيلا',
      price: 250000,
      location: 'الشيخ زايد، مصر',
      description: 'فيلا واسعة مع حديقة خاصة ومسبح.',
      images: ['assets/images/property/images (1).jpg'],
      rooms: 5,
      bathrooms: 3,
      area: 350,
      purpose: 'sale',
      publishDate: '2025-01-10',
      details: 'فيلا دورين مع تشطيب سوبر لوكس وحديقة 200 متر.',
      features: ['مسبح', 'جراج', 'حديقة خاصة'],
      owner: {
        name: 'سارة مصطفى',
        joinedDate: '2021-06-20'
      }
    },
    {
      id: 3,
      title: 'استوديو مميز',
      type: 'استوديو',
      price: 50000,
      location: 'مدينة نصر، مصر',
      description: 'استوديو مريح في موقع مركزي.',
      images: ['assets/images/property/images.jpg'],
      rooms: 1,
      bathrooms: 1,
      area: 60,
      purpose: 'rent',
      publishDate: '2025-03-05',
      details: 'مناسب للطلاب أو الأفراد العاملين، بجانب محطة المترو.',
      features: ['مطبخ مجهز', 'أمن 24 ساعة'],
      owner: {
        name: 'محمد فوزي',
        joinedDate: '2023-03-10'
      }
    }
  ];

  constructor() {}

  getProperties(): Observable<Property[]> {
    return of(this.properties);
  }

  getRentProperties(type?: string, location?: string): Observable<Property[]> {
    return of(this.properties.filter(p =>
      p.purpose === 'rent' &&
      (!type || p.type === type) &&
      (!location || p.location.includes(location))
    ));
  }

  getPropertyById(id: number): Observable<Property | undefined> {
    const property = this.properties.find(p => p.id === id);
    return of(property);
  }
}
