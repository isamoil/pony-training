import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  navbarCollapsed = true;
  ngOnInit(): void {
  }

 toggleNavbar(): void {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
