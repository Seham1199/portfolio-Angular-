import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  @HostListener('window:scroll')
animation(navbar:HTMLElement):void{
  window.scrollY > 30 
  ? navbar.classList.remove('py-4')
  : navbar.classList.add('py-4')
}

}
