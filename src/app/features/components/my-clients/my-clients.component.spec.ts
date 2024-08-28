import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClientsComponent } from './my-clients.component';

describe('MyClientsComponent', () => {
  let component: MyClientsComponent;
  let fixture: ComponentFixture<MyClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyClientsComponent]
    });
    fixture = TestBed.createComponent(MyClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
