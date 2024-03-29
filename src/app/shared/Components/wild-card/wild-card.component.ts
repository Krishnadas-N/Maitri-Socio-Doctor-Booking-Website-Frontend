import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-wild-card',
  standalone: true,
  imports: [],
  templateUrl: './wild-card.component.html',
  styleUrl: './wild-card.component.css'
})
export class WildCardComponent {
  constructor(private router:Router){}

  Navigate(){
    this.router.navigate(['/'])
  }
}
