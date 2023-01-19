import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from './../item';

@Component({
  selector: 'app-editar-item',
  templateUrl: './editar-item.component.html',
  styleUrls: ['./editar-item.component.css']
})
export class EditarItemComponent {
  item: Item = {
    nome: '',
    quantidade: ''
}

constructor(
  private service: ItemService,
  private router: Router,
  private route: ActivatedRoute
) { }

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id')
  this.service.buscarPorId(parseInt(id!)).subscribe((item) => {
      this.item = item
})
}

editarItem() {
  this.service.editar(this.item).subscribe(() => {
      this.router.navigate(['/listarItem'])
})
}

cancelar() {
  this.router.navigate(['/listarItem'])
}



}

