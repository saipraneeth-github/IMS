import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
 <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="../../assets/images/logo2.png" alt="Logo" width="50" height="60" class="d-inline-block align-text-top">
      <a id = "heading"><b>IMS</b></a>
    </a>
    <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/products'>Inventory Status</a></li>
        </ul>
  </div>
</nav>
<div class='container'>
      <router-outlet></router-outlet>
    </div>
<!--<nav class='navbar navbar-expand navbar-light bg-light' id="">
    <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/products'>Inventory Status</a></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>-->
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = ' IMS';
}
