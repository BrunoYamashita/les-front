import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  @Input() provider: any;
  constructor() { }

  ngOnInit() {
  }

}
