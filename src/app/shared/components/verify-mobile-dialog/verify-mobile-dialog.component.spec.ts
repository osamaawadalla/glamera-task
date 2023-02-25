import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyMobileDialogComponent } from './verify-mobile-dialog.component';

describe('VerifyMobileDialogComponent', () => {
  let component: VerifyMobileDialogComponent;
  let fixture: ComponentFixture<VerifyMobileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyMobileDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyMobileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
