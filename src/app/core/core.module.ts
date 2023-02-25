import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, RouterModule } from '@angular/router';
import { LottieModule } from 'ngx-lottie';
import { appRoutes } from '../app-routes';
import { throwIfAlreadyLoaded } from './guards/module-import/module-import.guard';
import { TokenInterceptor } from './interceptor/token/token.interceptor';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    provideRouter(appRoutes),
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}