import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BusinessFormComponent } from './components/business-form/business-form.component';
import { BusinessInfoComponent } from './components/business-info/business-info.component';

@Component({
  selector: 'app-business-information',
  standalone: true,
  imports: [
    SharedModule,
    BusinessInfoComponent,
    BusinessFormComponent
  ],
  templateUrl: './business-information.component.html',
  styleUrls: ['./business-information.component.scss']
})
export class BusinessInformationComponent {

}
