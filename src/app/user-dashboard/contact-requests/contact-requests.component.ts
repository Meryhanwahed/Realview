import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact-requests',
  imports:[CommonModule],
  templateUrl: './contact-requests.component.html',
  styleUrls: ['./contact-requests.component.css']
})
export class ContactRequestsComponent {
  contactRequests = [
    { id: 1, name: 'Ahmed', message: 'I would like to visit the property', phone: '01012345678' },
    { id: 2, name: 'Mona', message: 'Are there any payment facilities?', phone: '01123456789' }
  ];

  deleteRequest(id: number) {
    this.contactRequests = this.contactRequests.filter(r => r.id !== id);
  }
}
