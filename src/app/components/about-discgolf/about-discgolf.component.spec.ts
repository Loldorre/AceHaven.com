import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDiscgolfComponent } from './about-discgolf.component';

describe('AboutDiscgolfComponent', () => {
  let component: AboutDiscgolfComponent;
  let fixture: ComponentFixture<AboutDiscgolfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDiscgolfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDiscgolfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
