import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../service/provider.service';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

  constructor(private providerService: ProviderService) { }
  private providers: any;

  ngOnInit() {
    this.providerService.getProviders().subscribe((res: any) => {
      this.providers = res;
    })
  }

}
