import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedmeetingsComponent } from './completedmeetings.component';

describe('CompletedmeetingsComponent', () => {
  let component: CompletedmeetingsComponent;
  let fixture: ComponentFixture<CompletedmeetingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedmeetingsComponent]
    });
    fixture = TestBed.createComponent(CompletedmeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
