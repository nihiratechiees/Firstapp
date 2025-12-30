import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './component/about/about';
import { Contact } from './component/contact/contact';
import { Users } from './component/users/users';
import { Location } from './component/location/location';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,About,Contact,Users,Location],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('newapp');
}
