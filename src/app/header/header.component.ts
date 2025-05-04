import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  user: { name?: string } = {};
  showDropdown = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // الاستماع لتغييرات حالة تسجيل الدخول
    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
      this.user = this.authService.getUser() || {};
    });
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.user-dropdown') && !target.closest('.user-icon')) {
      this.showDropdown = false;
    }
  }
}
