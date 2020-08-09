import { Component, OnInit, AfterViewInit } from '@angular/core';

import { PageLoadingService } from '../../services/page-loading.service';

@Component({
  template: '',
})
export abstract class BasePageComponent implements AfterViewInit { 

  constructor(private pageLoadingService: PageLoadingService) {
    console.log('BasePage constructor');
  }

  ngAfterViewInit(): void {
    console.log('BasePage after view init');
    setTimeout(() => {
      this.pageLoadingService.pageLoadingComplete();
    }, 5000);
    
  }
  
}
