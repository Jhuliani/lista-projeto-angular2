import { Component } from '@angular/core';
import { Item } from './../item';
import { ItemService } from './../item.service';

@Component({
  selector: 'app-listar-item',
  templateUrl: './listar-item.component.html',
  styleUrls: ['./listar-item.component.css']
})
export class ListarItemComponent {
  listaItens: Item[] = [];

  constructor(private service: ItemService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaItens) => {
      this.listaItens = listaItens
    })
}
}

