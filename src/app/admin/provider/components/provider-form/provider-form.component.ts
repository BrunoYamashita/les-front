import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProviderService } from '../../service/provider.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-provider-form',
  templateUrl: './provider-form.component.html',
  styleUrls: ['./provider-form.component.css']
})
export class ProviderFormComponent implements OnInit {
  private providerForm: FormGroup;
  constructor(private route: ActivatedRoute,private formBuilder: FormBuilder, private providerService: ProviderService, private router: Router) { }
  private id: any;
  ngOnInit() {
    this.createForm();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      if (this.id){
        this.providerService.getProvidersById(this.id).subscribe((provider: any) => {
          this.providerForm.setValue(provider);
        });
      }
    });
  } 

  createForm() {
    this.providerForm = this.formBuilder.group({
      marca_id: [''],
      marca_nome: ['', Validators.required],
      marca_status: ['', Validators.required],
      _method: [''],
    });
  }

  submit() {
    if(this.id) {
      this.providerForm.patchValue({'_method':'PUT'})
      return this.providerService.updateProvider(this.id, this.providerForm.value).subscribe(() => {
        this.router.navigate(['admin/home/provider'], {replaceUrl: true});
      })
    }
    this.providerService.createProvider(this.providerForm.value).subscribe((success) => {
      console.log(success);
      this.router.navigate(['admin/home/provider'], {replaceUrl: true});

    }, error => {
      console.log("error:" + error);
    })
  }
}
