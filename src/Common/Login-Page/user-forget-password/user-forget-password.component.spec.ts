import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserForgetPasswordComponent } from './user-forget-password.component';

describe('UserForgetPasswordComponent', () => {
  let component: UserForgetPasswordComponent;
  let fixture: ComponentFixture<UserForgetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserForgetPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserForgetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
