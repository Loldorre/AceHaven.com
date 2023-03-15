import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinneaComponent } from './linnea.component';

describe('LinneaComponent', () => {
  let component: LinneaComponent;
  let fixture: ComponentFixture<LinneaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinneaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinneaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
