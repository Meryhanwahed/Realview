import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-latest-rent-properties',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './latest-rent-properties.component.html',
  styleUrls: ['./latest-rent-properties.component.css']
})
export class LatestRentPropertiesComponent implements OnInit {
  properties: any[] = [];
  types: string[] = ['شقة', 'فيلا', 'استوديو'];
  locations: string[] = ['القاهرة', 'الجيزة', 'الإسكندرية'];

  selectedType: string = '';
  selectedLocation: string = '';
  page: number = 1;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchProperties();
  }

  fetchProperties() {
    const params: any = {
      page: this.page,
      limit: 8,
      purpose: 'Rent',
      ...(this.selectedType && { type: this.selectedType }),
      ...(this.selectedLocation && { location: this.selectedLocation })
    };

    const headers: any = {
      token: `ahmedEhab ${localStorage.getItem('token')}`
    };

    this.http.get<any>('https://gradution-project-silk.vercel.app/properties/list?purpose=Rent', { headers })
      .subscribe({
        next: (res) => {
          this.properties = res.data;
          console.log("Rent Properties Response:", res);
        },
        error: (err) => {
          console.error('خطأ في جلب بيانات الإيجار:', err);
        }
      });
  }

  goToDetails(id: string) {
    this.router.navigate(['/property', id]);
  }

  nextPage() {
    this.page++;
    this.fetchProperties();
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.fetchProperties();
    }
  }
}
