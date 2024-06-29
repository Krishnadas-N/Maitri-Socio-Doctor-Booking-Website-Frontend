import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-Loader',
  standalone: true,
  imports: [],
  templateUrl: './screen-loader.component.html',
  styleUrls: ['./screen-loader.component.css'],
})
export class ScreenLoaderComponent implements OnInit {
  title: string = 'Maitri';
  constructor() {}

  ngOnInit() {}
}
