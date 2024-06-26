import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent implements OnInit {
  @Input() profileImageSrc: string = '';
  @Input() name: string = '';
  @Input() location: string = '';
  @Input() postCount: number = 0;
  @Input() followersCount: number = 0;
  @Input() followingCount: number = 0;

  constructor() {}

  ngOnInit() {}
}
