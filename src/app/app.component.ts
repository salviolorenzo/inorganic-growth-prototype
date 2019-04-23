import { Component } from '@angular/core';
import { MockDataService } from './services/mock-data/mock-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'insiten-coding-challenge';
  targets: any = [];

  constructor(mockDataService: MockDataService) {
    this.targets = mockDataService.companies;
  }
}
