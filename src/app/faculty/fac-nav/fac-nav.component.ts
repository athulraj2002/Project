import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fac-nav',
  templateUrl: './fac-nav.component.html',
  styleUrls: ['./fac-nav.component.scss']
})
export class FacNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  navbarOpen = false;

    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    }
}
