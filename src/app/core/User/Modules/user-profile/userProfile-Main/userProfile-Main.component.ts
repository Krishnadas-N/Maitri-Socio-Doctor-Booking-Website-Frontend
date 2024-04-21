import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userProfile-Main',
  templateUrl: './userProfile-Main.component.html',
  styleUrls: ['./userProfile-Main.component.css']
})
export class UserProfileMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectedSection: string = 'profile'; // Default section

  showSection(section: string): void {
    this.selectedSection = section;
  }

}
