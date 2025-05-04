import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgIf, NgFor, DecimalPipe, DatePipe } from '@angular/common';
import { PropertyService } from '../../services/property.service';
import { Property } from '../../models/property';
import { HttpClient } from '@angular/common/http'; // لاستدعاء API

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, DecimalPipe, DatePipe],
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  property?: Property;
  message?: string;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private sanitizer: DomSanitizer,
    private http: HttpClient // لعمل الطلبات إلى الـ API
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.propertyService.getPropertyById(id).subscribe(data => {
      this.property = data;
    });
  }

  // دالة لإضافة العقار إلى المفضلة
  addToFavorites(): void {
    if (this.property) {
      // إرسال طلب إلى الـ API لإضافة العقار إلى المفضلة
      this.http.post('https://api.example.com/favorites', { propertyId: this.property.id })
        .subscribe(response => {
          alert('تم إضافة العقار إلى المفضلة');
        }, error => {
          alert('حدث خطأ أثناء إضافة العقار إلى المفضلة');
        });
    }
  }

  // دالة لعرض رابط الخريطة بعد التحقق من الموقع
  get mapUrl(): SafeResourceUrl {
    const location = this.property?.location ?? '';
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.google.com/maps?q=${location}&output=embed`
    );
  }

  // دالة لعرض رسالة عند الضغط على الأزرار
  showMessage(type: string): void {
    switch (type) {
      case 'واتس آب':
        this.message = `يمكنك التواصل عبر واتس آب على الرقم 01012345678`;
        break;
      case 'اتصال':
        this.message = `اتصل بنا على الرقم 01012345678`;
        break;
      case 'مشاركة':
        this.message = `تم مشاركة العقار معك`;
        break;
      default:
        this.message = '';
    }
  }
}
