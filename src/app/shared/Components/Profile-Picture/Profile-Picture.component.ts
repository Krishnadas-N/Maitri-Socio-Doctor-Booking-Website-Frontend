import { CommonModule } from '@angular/common';
import { Component, Input,OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-picture',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent implements OnInit {
  @Input() src!:string;
  loading: boolean = false;
  @Output() imageFile = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  upload(event: Event){
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const selectedFile: File = inputElement.files[0]; // Explicitly cast to File type
      console.log(selectedFile);
      this.imageFile.emit(selectedFile);
    }
  }
}
