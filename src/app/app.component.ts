import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
  <app-products></app-products>
  </div>
  `
})
export class AppComponent {
  title = 'APP';
  Name = 'VINEETH';
  AGE = '21';
 }
