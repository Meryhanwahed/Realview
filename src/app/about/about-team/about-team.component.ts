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
      name: 'Zeeshan Ali Khan',
      position: 'CEO, Dubizzle Group Pakistan',
      role: 'Board Member',
      image: 'assets/zeeshan.jpg',
      description:
        'Zeeshan Ali Khan is a member of the Dubizzle Group Board of Directors and the company’s co-founder. The quintessential entrepreneur.',
    },
    {
      name: 'Haider Ali Khan',
      position: 'CEO, Dubizzle Group MENA',
      role: 'Board Member',
      image: 'assets/haider.jpg',
      description:
        'Haider Ali Khan is the tech visionary leading Bayut-Dubizzle into its promising future. Educated at the University of Texas at Austin.',
    },
  ];
}