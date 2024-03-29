import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progressive-bar',
  standalone: true,
  imports: [],
  templateUrl: './progressive-bar.component.html',
  styleUrl: './progressive-bar.component.css'
})
export class ProgressiveBarComponent {
  @Input() currentStep: number = 1;

  isCurrentStep(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }
}
