import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-excluir-item',
  templateUrl: './excluir-item.component.html',
  styleUrls: ['./excluir-item.component.css']
})
export class ExcluirItemComponent {

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

  item: Item = {
    id: 0,
    nome: '',
    quantidade: ''

  }

  excluirItem() {
    if(this.item.id) {
        this.service.excluir(this.item.id).subscribe(() => {
            this.router.navigate(['/listarItem'])
        })
    }
  }

  cancelar() {
    this.router.navigate(['/listarItem'])
  }

}
