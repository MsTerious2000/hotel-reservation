import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutContactUsComponent } from './about-contact-us.component';

describe('AboutContactUsComponent', () => {
  let component: AboutContactUsComponent;
  let fixture: ComponentFixture<AboutContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
