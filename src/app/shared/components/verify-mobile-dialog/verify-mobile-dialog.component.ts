import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgOtpInputModule } from 'ng-otp-input';

@Component({
  selector: 'app-verify-mobile-dialog',
  standalone: true,
  imports: [
    NgOtpInputModule
  ],
  templateUrl: './verify-mobile-dialog.component.html',
  styleUrls: [
    '../../../../assets/styles/_custom-button.scss',
    './verify-mobile-dialog.component.scss'
  ]
})
export class VerifyMobileDialogComponent {

  constructor(public matDialogRef: MatDialogRef<VerifyMobileDialogComponent>) { }

  config: any = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: true,
    placeholder: '',
    inputStyles: {
      'width': 'calc(25% - 8px)',
      'height': '46px',
      'border-radius': '4px',
      'border': 'border: 1px solid #D0D5DE',
      'color': '#454C66',
      'font-weight': '600',
      'font-size': '18px'
    }
  };

}
