import { Component } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-business-form',
  standalone: true,
  imports: [
    NgSelectModule,
    MatRadioModule,
    RouterModule
  ],
  templateUrl: './business-form.component.html',
  styleUrls: [
    '../../../../../assets/styles/_custom-input.scss',
    '../../../../../assets/styles/_custom-button.scss',
    '../../../../../assets/styles/_custom-checkbox.scss',
    '../../../../../assets/styles/_custom-ng-select.scss',
    './business-form.component.scss'
  ]
})
export class BusinessFormComponent {

  governorates: any[] = [
    { id: 1, name: 'Gov1' },
    { id: 2, name: 'Gov2' },
    { id: 3, name: 'Gov3' }
  ];

  districts: any[] = [
    { id: 1, name: 'dist1' },
    { id: 2, name: 'dist2' },
    { id: 3, name: 'dist3' }
  ];

  socials: any[] = [
    { id: 1, name: 'Facebook' },
    { id: 2, name: 'Twitter' },
    { id: 3, name: 'Friend' }
  ];

}
