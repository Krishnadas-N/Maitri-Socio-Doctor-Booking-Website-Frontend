import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-skelton-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-skelton-loader.component.html',
  styleUrls: ['./card-skelton-loader.component.css'],
})
export class CardSkeltonLoaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
