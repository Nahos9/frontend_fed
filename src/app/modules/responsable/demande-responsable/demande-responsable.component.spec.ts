import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeResponsableComponent } from './demande-responsable.component';

describe('DemandeResponsableComponent', () => {
  let component: DemandeResponsableComponent;
  let fixture: ComponentFixture<DemandeResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandeResponsableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandeResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
