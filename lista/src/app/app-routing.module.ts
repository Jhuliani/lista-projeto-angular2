import { ListarItemComponent } from './componentes/itens/listar-item/listar-item.component';
import { CriarItemComponent } from './componentes/itens/criar-item/criar-item.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'listarItem',
      pathMatch: 'full'
  },
  {
      path: 'criarItem',
      component: CriarItemComponent
  },
  {
      path: 'listarItem',
      component: ListarItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
