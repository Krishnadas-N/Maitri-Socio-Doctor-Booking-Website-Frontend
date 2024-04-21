import { Component, OnInit ,Input,Output,EventEmitter,HostListener} from '@angular/core';
import {CommonModule} from '@angular/common'
@Component({
  selector: 'app-post-options',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './post-options.component.html',
  styleUrls: ['./post-options.component.css']
})
export class PostOptionsComponent implements OnInit {

  constructor() { }
  
  closeModal() {
  }

 

  ngOnInit(): void {
  }

}
