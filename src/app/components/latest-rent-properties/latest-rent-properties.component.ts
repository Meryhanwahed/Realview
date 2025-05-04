import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PropertyService } from '../../services/property.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-latest-rent-properties',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './latest-rent-properties.component.html',
  styleUrls: ['./latest-rent-properties.component.css']
})
export class LatestRentPropertiesComponent implements OnInit {
  properties: Property[] = [];
  types: string[] = ['شقة', 'فيلا', 'استوديو'];
  locations: string[] = ['القاهرة', 'الجيزة', 'الإسكندرية'];

  selectedType: string = '';
  selectedLocation: string = '';

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.fetchProperties();
  }

  fetchProperties(): void {
    this.propertyService.getRentProperties(this.selectedType, this.selectedLocation)
    .subscribe({
        next: (data) => this.properties = data,
        error: (err) => console.error('فشل في تحميل العقارات:', err)
      });
  }
}

interface Property {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
  rooms: number;
  bathrooms: number;
  area: number;
  type: string;
  location: string;
  purpose: string;
}
