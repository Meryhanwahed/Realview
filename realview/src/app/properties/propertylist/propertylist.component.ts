import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertycardComponent } from "../propertycard/propertycard.component";
import { FormsModule } from '@angular/forms';
import { PropertyFilterComponent } from '../propertyfilter/propertyfilter.component';
import { Property } from '../../models/property';
import { PropertyService } from '../../services/property.service'; // Import Service
import { Input } from '@angular/core';
@Component({
  selector: 'app-property-list',
  standalone: true, 
  imports: [CommonModule, PropertycardComponent,FormsModule, PropertyFilterComponent],
  templateUrl: './propertylist.component.html',
  styleUrls: ['./propertylist.component.css']
})
export class PropertyListComponent implements OnInit {
  @Input() properties: Property[] = []; // ⬅️ تعريف Input لاستقبال البيانات من المكون الأب
  filteredProperties: Property[] = [];
  sortBy: string = 'price';

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.getProperties();
  }

  getProperties(): void {
    this.propertyService.getProperties().subscribe((data: Property[]) => {
      this.properties = data;
      this.applyFilter({});
    });
  }

  applyFilter(filterValues: any): void {
    this.filteredProperties = this.properties.filter(property => {
      return (
        (!filterValues.type || property.type === filterValues.type) &&
        (!filterValues.location || property.location.includes(filterValues.location)) &&
        (!filterValues.minPrice || property.price >= filterValues.minPrice) &&
        (!filterValues.maxPrice || property.price <= filterValues.maxPrice)
      );
    });
    this.sortProperties();
  }

  sortProperties(): void {
    this.filteredProperties.sort((a, b) => {
      if (this.sortBy === 'price') {
        return a.price - b.price;
      } else if (this.sortBy === 'location') {
        return a.location.localeCompare(b.location);
      }
      return 0;
    });
  }
}