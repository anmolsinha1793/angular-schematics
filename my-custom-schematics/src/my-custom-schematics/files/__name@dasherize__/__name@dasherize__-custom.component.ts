import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'Custom-<%= dasherize(name) %>'
})

export class Custom<%= classify(name) %>Component implements OnInit {
  constructor() {

  }
  ngOnInit() {
  }
  <% if(scanAll) { %>
  scanAll(arr: any[]): void {
    const condition = arr.every((el) => el%2===0);
  }
  <% } %>
}
