import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location',
  imports: [],
  template: `
    <h1>Selected location is : {{this.direction}} </h1>
    <h2>Selected country is : {{this.country}} </h2>
  `,
  styles: ``,
})
export class Location implements OnInit {

  constructor(private activated:ActivatedRoute){

  }
  ngOnInit(): void {
    this.direction=this.activated.snapshot.paramMap.get('direction') as string
    this.country=this.activated.snapshot.paramMap.get('country') as string
  }

  direction='';
  country='';

}
