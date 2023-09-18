import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaQrcodeDialogComponent } from './mfa-qrcode-dialog.component';

describe('MfaQrcodeDialogComponent', () => {
  let component: MfaQrcodeDialogComponent;
  let fixture: ComponentFixture<MfaQrcodeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfaQrcodeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfaQrcodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
