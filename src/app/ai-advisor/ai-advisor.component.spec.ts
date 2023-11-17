import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiAdvisorComponent } from './ai-advisor.component';

describe('AiAdvisorComponent', () => {
  let component: AiAdvisorComponent;
  let fixture: ComponentFixture<AiAdvisorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiAdvisorComponent]
    });
    fixture = TestBed.createComponent(AiAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
