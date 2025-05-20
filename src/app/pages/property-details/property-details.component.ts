// src/app/components/property-details/property-details.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgIf, NgFor, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, DecimalPipe],
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  property: any;
  message?: string;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // بيانات وهمية (Static Mock Data)
    this.property = {
      id: 1,
      title: 'شقة فاخرة للبيع',
      description: 'شقة ٣ غرف مساحة رائعة',
      images: ['./assets/images/property/images (1).jpg'],
      rooms: 3,
      bathrooms: 2,
      area: 130,
      price: 950000,
      isFavorite: false,
      location: 'القاهرة الجديدة، التجمع الخامس',
      addedBy: 'user123',
      purpose: 'للبيع',
      ownerPhone: '01012345678',
      createdAt: new Date(),
      category: 'سكني',
      subCategory: 'شقة',
      status: 'متاح',
      availabilityDate: new Date('2025-06-01'),
      features: ['مصعد', 'جراج', 'أمن 24 ساعة']
    };
  }

  get mapUrl(): SafeResourceUrl {
    const location = this.property?.location ?? '';
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`
    );
  }

  showMessage(type: string): void {
    switch (type) {
      case 'واتس آب':
        this.message = `يمكنك التواصل عبر واتس آب على الرقم ${this.property?.ownerPhone}`;
        break;
      case 'اتصال':
        this.message = `اتصل بنا على الرقم ${this.property?.ownerPhone}`;
        break;
      case 'مشاركة':
        this.message = `تم مشاركة العقار معك`;
        break;
      default:
        this.message = '';
    }
  }

  addToFavorites(): void {
    this.property.isFavorite = !this.property.isFavorite;
    this.message = this.property.isFavorite
      ? 'تمت الإضافة إلى المفضلة'
      : 'تمت الإزالة من المفضلة';
  }
}
