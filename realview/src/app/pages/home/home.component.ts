import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  searchQuery: string = '';
  selectedCategory: string = '';
  map!: L.Map;
  propertyMarkers: L.Marker[] = [];

  allProperties = [
    { title: 'Luxury Villa', price: 500000, image: 'assets/villa.jpg', category: 'Villas', lat: 30.05, lng: 31.23 },
    { title: 'Modern Apartment', price: 150000, image: 'assets/apartment.jpg', category: 'Apartments', lat: 30.06, lng: 31.24 },
    { title: 'Commercial Office', price: 300000, image: 'assets/office.jpg', category: 'Commercial Offices', lat: 30.07, lng: 31.25 },
    { title: 'Plot of Land', price: 200000, image: 'assets/land.jpg', category: 'Lands', lat: 30.08, lng: 31.26 }
  ];

  get filteredProperties() {
    return this.allProperties.filter(property => {
      const matchesSearch = this.searchQuery === '' || property.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesCategory = this.selectedCategory === '' || property.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }

  onSearch(): void {
    this.updateMapMarkers();
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.updateMapMarkers();
  }

  ngAfterViewInit(): void {
    this.map = L.map('map').setView([30.0444, 31.2357], 11);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
    this.updateMapMarkers();
  }

  updateMapMarkers(): void {
    this.propertyMarkers.forEach(marker => this.map.removeLayer(marker));
    this.propertyMarkers = [];

    this.filteredProperties.forEach(property => {
      const marker = L.marker([property.lat, property.lng])
        .addTo(this.map)
        .bindPopup(`<b>${property.title}</b><br>$${property.price}`);
      this.propertyMarkers.push(marker);
    });
  }
}
