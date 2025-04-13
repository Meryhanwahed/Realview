import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
declare var $: any; // To allow the use of jQuery

@Component({
  selector: 'app-carousel',
  imports: [RouterModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // This code runs after the view has initialized, ensuring the DOM is ready for jQuery.
    $(document).ready(function () {
      // Initialize the hero slick slider
      $('.hero-slick').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        rtl: true,
        arrows: true,
      });
    });
  }
}
