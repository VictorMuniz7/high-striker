import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighstrikerComponent } from './highstriker.component';

describe('HighstrikerComponent', () => {
  let component: HighstrikerComponent;
  let fixture: ComponentFixture<HighstrikerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighstrikerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighstrikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
