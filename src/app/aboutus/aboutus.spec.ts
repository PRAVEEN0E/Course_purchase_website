import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutus } from './aboutus';

describe('Aboutus', () => {
  let component: Aboutus;
  let fixture: ComponentFixture<Aboutus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
