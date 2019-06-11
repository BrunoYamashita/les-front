import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProviderService } from '../../service/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-form',
  templateUrl: './provider-form.component.html',
  styleUrls: ['./provider-form.component.css']
})
export class ProviderFormComponent implements OnInit {
  private providerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private providerService: ProviderService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.providerForm = this.formBuilder.group({
      marca_nome: ['', Validators.required],
      marca_status: ['', Validators.required]
    });
  }

  submit() {
    this.providerService.createProvider(this.providerForm.value).subscribe((success) => {
      console.log(success);
      this.router.navigate(['admin/home/provider'], {replaceUrl: true});

    }, error => {
      console.log("error:" + error);
    })
  }
}
