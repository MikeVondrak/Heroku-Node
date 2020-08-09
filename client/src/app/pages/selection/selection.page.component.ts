import { Component, OnInit } from '@angular/core';

import { BasePageComponent } from '../base-page/base-page.component';
import { PageLoadingService } from 'src/app/services/page-loading.service';

@Component({
  selector: 'app-selection-page',
  templateUrl: './selection.page.component.html',
  styleUrls: ['./selection.page.component.scss', '../pages-shared.scss']
})
export class SelectionPageComponent extends BasePageComponent implements OnInit {

  constructor(pageLoadingService: PageLoadingService) { 
    super(pageLoadingService);
  }

  ngOnInit(): void {
  }

}
