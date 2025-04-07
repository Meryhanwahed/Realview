import { Component } from '@angular/core';
import { PropertyService } from '../services/property.service';
import { Property } from '../models/property';
import { OnInit } from '@angular/core';
import { PropertyFilterComponent } from "./propertyfilter/propertyfilter.component";
import { MapViewComponent } from "./mapview/mapview.component";
import { PropertyListComponent } from "./propertylist/propertylist.component";
@Component({
  selector: 'app-properties',
  imports: [ MapViewComponent, PropertyListComponent],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesPageComponent implements OnInit {
  properties: Property[] = [];
  filteredProperties: Property[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.loadProperties();
  }

  loadProperties(): void {
    this.propertyService.getProperties().subscribe((data: Property[]) => {
      this.properties = data;
      this.filteredProperties = data;
    });
  }

  onFilterChange(filteredResults: Property[]): void {
    this.filteredProperties = filteredResults;
  }
}