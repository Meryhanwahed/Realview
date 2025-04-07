import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  imports: [CommonModule , RouterModule, ReactiveFormsModule],
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css'
})
export class AddPropertyComponent {
  propertyForm: FormGroup;
  images: File[] = [];

  constructor(private fb: FormBuilder) {
    this.propertyForm = this.fb.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      location: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      description: ['', Validators.required],
      images: [null]
    });
  }

  onImageUpload(event: any) {
    if (event.target.files.length > 0) {
      this.images = Array.from(event.target.files);
    }
  }

  submitProperty() {
    if (this.propertyForm.valid) {
      const formData = new FormData();
      formData.append('title', this.propertyForm.get('title')?.value);
      formData.append('type', this.propertyForm.get('type')?.value);
      formData.append('price', this.propertyForm.get('price')?.value);
      formData.append('location', this.propertyForm.get('location')?.value);
      formData.append('latitude', this.propertyForm.get('latitude')?.value);
      formData.append('longitude', this.propertyForm.get('longitude')?.value);
      formData.append('description', this.propertyForm.get('description')?.value);
      
      this.images.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
      });

      console.log('Property Data:', formData);
      // إرسال البيانات إلى السيرفر باستخدام HTTP Client
    } else {
      alert('Please fill in all required fields');
    }
  }
}