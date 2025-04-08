import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-carousel',
  imports:[CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = [
    { src: 'assets/images/carousal/1.jpg', alt: 'Image 1' },
    { src: 'assets/images/carousal/2.jpg', alt: 'Image 2' },
    { src: 'assets/images/carousal/3.jpg', alt: 'Image 3' },
  ];
  currentIndex: number = 0;

  nextImage() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;
    }
  }
}
