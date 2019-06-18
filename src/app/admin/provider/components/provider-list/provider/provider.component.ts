import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderService } from '../../../service/provider.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  @Input() provider: any;
  constructor(private router: Router, private providerService: ProviderService) { }

  ngOnInit() {
  }

  edit() {
    this.router.navigate(['admin/home/provider',this.provider.marca_id]);
  }

  delete(){
    this.providerService.deleteProvider(this.provider.marca_id).subscribe(() =>{
      this.router.navigate(['admin/home/provider']);

    })
  }
}
