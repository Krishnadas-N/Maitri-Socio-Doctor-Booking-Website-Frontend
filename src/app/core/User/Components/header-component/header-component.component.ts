import { AfterViewInit, Component,ElementRef,OnInit  } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
      const burger = this.elementRef.nativeElement.querySelectorAll('.navbar-burger')
      const menu = this.elementRef.nativeElement.querySelectorAll('.navbar-menu')

      if (burger.length && menu.length) {
        burger.forEach((burgerItem:any) => {
          burgerItem.addEventListener('click', () => {
            menu.forEach((menuItem:any) => {
              menuItem.classList.toggle('hidden');
            });
          });
        });
      }

      const close = this.elementRef.nativeElement.querySelectorAll('.navbar-close')
      const backdrop = this.elementRef.nativeElement.querySelectorAll('.navbar-backdrop')

      if (close.length) {
        close.forEach((closeItem:any) => {
          closeItem.addEventListener('click', () => {
            menu.forEach((menuItem:any) => {
              menuItem.classList.toggle('hidden');
            });
          });
        });
      }

      if (backdrop.length) {
        backdrop.forEach((backdropItem:any) => {
          backdropItem.addEventListener('click', () => {
            menu.forEach((menuItem:any) => {
              menuItem.classList.toggle('hidden');
            });
          });
        });
      }
  }
}