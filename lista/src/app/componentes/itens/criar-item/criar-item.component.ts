import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from './../item';


@Component({
  selector: 'app-criar-item',
  templateUrl: './criar-item.component.html',
  styleUrls: ['./criar-item.component.css']
})

export class CriarItemComponent {

  constructor(
    private service: ItemService,
    private router: Router,
    private formBuilder: FormBuilder
) { }

    ngOnInit(): void {
      this.formulario = this.formBuilder.group({
        nome: ['', Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
        quantidade: ['',Validators.compose([
          Validators.required,
          Validators.minLength(1)
          ])]
      })
    }


  formulario!: FormGroup;

  criarItem(){
    console.log(this.formulario.get('autoria')?.errors)
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(() =>{
        this.router.navigate(['/listarItem'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarItem'])
  }

}
