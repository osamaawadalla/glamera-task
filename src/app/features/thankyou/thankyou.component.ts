import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions, LottieModule } from 'ngx-lottie';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-thankyou',
  standalone: true,
  imports: [
    SharedModule,
    LottieModule
  ],
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit, OnDestroy {

  options: AnimationOptions = {
    path: '/assets/imgs/success.json'
  };

  navigateTimeout: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.redirectToHome();
  }

  ngOnDestroy(): void {
    clearTimeout(this.navigateTimeout);
  }

  redirectToHome(): void {
    this.navigateTimeout = setTimeout(() => {
      this.router.navigate(['/']);
    }, 5000);
  }

}
