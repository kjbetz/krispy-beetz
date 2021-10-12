import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCalculatorPageComponent } from './page.component';

describe('PageCalculatorPageComponent', () => {
  let component: PageCalculatorPageComponent;
  let fixture: ComponentFixture<PageCalculatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageCalculatorPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCalculatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
