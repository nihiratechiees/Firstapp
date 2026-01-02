import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menuheader } from './menuheader/menuheader';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Menuheader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('newapp');
}
