import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menuheader } from './menuheader';

describe('Menuheader', () => {
  let component: Menuheader;
  let fixture: ComponentFixture<Menuheader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menuheader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menuheader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
