import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DorianComponent } from './dorian.component';

describe('DorianComponent', () => {
  let component: DorianComponent;
  let fixture: ComponentFixture<DorianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DorianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DorianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
