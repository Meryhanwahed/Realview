import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about-team',
  imports: [CommonModule],
  templateUrl: './about-team.component.html',
  styleUrl: './about-team.component.css'
})
export class TeamComponent {
  teamMembers = [
    {
      name: 'Merihan Wahed',
      position: 'CEO, Realview Frontend Group',
      role: 'Board Member',
      image: 'assets/images/aboutPage/team/merihan.jpg',
      description:
        'Merihan Wahed is the CEO of Realview Frontend Group, leading innovative frontend solutions with expertise in Angular and UI/UX design.',
    },
    {
      name: 'Merihan Wahed',
      position: 'CEO, Realview Frontend Group',
      role: 'Board Member',
      image: 'assets/images/aboutPage/team/merihan.jpg',
      description:
        'Merihan Wahed is the CEO of Realview Frontend Group, leading innovative frontend solutions with expertise in Angular and UI/UX design.',
    },
    {
      name: 'Haider Ali Khan',
        position: 'CEO, Realview Frontend Group',
        role: 'Board Member',
        image: 'assets/images/aboutPage/team/merihan.jpg',
        description:
          'Merihan Wahed is the CEO of Realview Frontend Group, leading innovative frontend solutions with expertise in Angular and UI/UX design.',
      },
  ];
}