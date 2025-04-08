import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import * as L from 'leaflet';
import { PropertyMapComponent } from "../../components/property-map/property-map.component";
import { FeaturedPropertiesComponent } from "../../components/featured-properties/featured-properties.component";
import { PropertyCategoriesComponent } from "../../components/property-categories/property-categories.component";
import { WhyChooseUsComponent } from "../../components/why-choose-us/why-choose-us.component";
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { CtaButtonComponent } from "../../components/cta-button/cta-button.component";
import { CarouselComponent } from "../../components/carousel/carousel.component";

// استيراد المكونات


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FeaturedPropertiesComponent,
    PropertyCategoriesComponent,
    WhyChooseUsComponent,
    SearchBarComponent,
    CtaButtonComponent,
    CarouselComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  searchQuery: string = '';

  // كل العقارات
  properties = [
    {
      title: 'Luxury Villa',
      price: 500000,
      category: 'Villas',
      image: 'assets/villa.jpg',
      lat: 30.0444,
      lng: 31.2357
    },
    {
      title: 'Modern Apartment',
      price: 150000,
      category: 'Apartments',
      image: 'assets/apartment.jpg',
      lat: 30.0500,
      lng: 31.2400
    },
    {
      title: 'Office Space',
      price: 300000,
      category: 'Commercial Offices',
      image: 'assets/office.jpg',
      lat: 30.0600,
      lng: 31.2300
    }
  ];

  // هذه المتغيرات اللي راح تتغير وقت البحث أو التصنيف
  filteredProperties = [...this.properties];

  categories = ['Apartments', 'Villas', 'Lands', 'Commercial Offices'];

  ngAfterViewInit(): void {
    // الخرائط تشتغل من خلال المكون المنفصل PropertyMapComponent
    // هنا فقط احتفظنا بـ AfterViewInit لو تحتاجه لاحقًا
  }

  onSearch(query: string) {
    this.searchQuery = query;
    this.filteredProperties = this.properties.filter(p =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  onCategorySelected(category: string) {
    this.filteredProperties = this.properties.filter(
      property => property.category === category
    );
  }
}
