import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCarouselComponent } from '../../components/property-carousel/property-carousel.component';
import { PropertyMapComponent } from '../../components/property-map/property-map.component';
import { PropertyInfoComponent } from '../../components/property-info/property-info.component';
import { PropertyDescriptionComponent } from '../../components/property-description/property-description.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [
    CommonModule,
    PropertyCarouselComponent ,
    PropertyMapComponent ,
    PropertyInfoComponent ,
    PropertyDescriptionComponent ,
    ContactFormComponent
  ],
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {
  propertyId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // استخراج ID من الرابط
    this.propertyId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Property ID:', this.propertyId);
    // هتستخدم ID هنا لاستدعاء البيانات من API أو Array
  }
}