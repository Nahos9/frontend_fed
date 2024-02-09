import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SibarRespoComponent } from './sibar-respo.component';

describe('SibarRespoComponent', () => {
  let component: SibarRespoComponent;
  let fixture: ComponentFixture<SibarRespoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SibarRespoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SibarRespoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
