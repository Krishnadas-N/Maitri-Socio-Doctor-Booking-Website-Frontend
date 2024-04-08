import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {
  @Input() spinnername=''
  @Input() name: string = 'Loading...';
  @Input() color: string = '#007bff'; // Default color is blue
  @Input() width: string = '50px';
  @Input() height: string = '50px';
}
