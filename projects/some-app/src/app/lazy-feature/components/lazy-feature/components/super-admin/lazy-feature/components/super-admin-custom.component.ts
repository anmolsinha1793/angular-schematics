import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'Custom-lazy-feature/components/super-admin'
})

export class CustomLazyFeature/components/superAdminComponent implements OnInit {
  constructor() {

  }
  ngOnInit() {
  }
  
  scanAll(arr: any[]): void {
    const condition = arr.every((el) => el%2===0);
  }
  
}
