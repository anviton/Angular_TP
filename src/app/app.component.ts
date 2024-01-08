import { Component } from '@angular/core';
import { Personne } from './model/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "hello world";
  personne:Personne = {
    firstName:"toto",
    lastName:"titi",
  };
}
