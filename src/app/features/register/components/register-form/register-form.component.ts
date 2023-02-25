import { Component, OnDestroy } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router, RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    MatCheckboxModule,
    RouterModule,
    MatDialogModule
  ],
  templateUrl: './register-form.component.html',
  styleUrls: [
    '../../../../../assets/styles/_custom-input.scss',
    '../../../../../assets/styles/_custom-button.scss',
    './register-form.component.scss'
  ]
})
export class RegisterFormComponent implements OnDestroy {

  private subscription: Subscription = new Subscription();

  constructor(
    private matDialog: MatDialog,
    private router: Router
  ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openVerifyMobileDialog() {
    import('../../../../shared/components/verify-mobile-dialog/verify-mobile-dialog.component').then(
      ({ VerifyMobileDialogComponent }) => {
        const dialogRef = this.matDialog.open(VerifyMobileDialogComponent, {
          width: "90%",
          maxWidth: "465px",
          panelClass: "custom-dialog"
        });

        this.subscription.add(dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.router.navigate(['/business-information']);
          }
        }))
      }
    )
  }

}
