import { Component } from '@angular/core';
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
    private router: Router
) { }

 item: Item = {
    nome: '',
    quantidade: ''
  }

  criarItem(){
    this.service.criar(this.item).subscribe(() =>{
      this.router.navigate(['/listarItem'])
    })
  }
  cancelar() {
    this.router.navigate(['/listarItem'])
  }

}
