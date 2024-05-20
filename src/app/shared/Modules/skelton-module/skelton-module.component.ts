import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skelton-module',
  templateUrl: './skelton-module.component.html',
  styleUrls: ['./skelton-module.component.css']
})
export class SkeltonModuleComponent implements OnInit {
  @Input() width: string = '100%';
  @Input() height: string = '200px';
  @Input() className: string = '';

  constructor() { }

  ngOnInit() {
  }

}
