import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterSliderComponent } from './components/register-slider/register-slider.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    SharedModule,
    RegisterSliderComponent,
    RegisterFormComponent
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

}
