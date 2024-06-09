import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatsViewComponent } from './achats-view.component';
import { HttpClientModule } from '@angular/common/http';

describe('AchatsViewComponent', () => {
  let component: AchatsViewComponent;
  let fixture: ComponentFixture<AchatsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchatsViewComponent, HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AchatsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
