import { ListarItemComponent } from './componentes/itens/listar-item/listar-item.component';
import { CriarItemComponent } from './componentes/itens/criar-item/criar-item.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcluirItemComponent } from './componentes/itens/excluir-item/excluir-item.component';
import { EditarItemComponent } from './componentes/itens/editar-item/editar-item.component';

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
  },
  {
    path: 'itens/excluirItem/:id',
    component: ExcluirItemComponent
  },
  {
    path: 'itens/editaritem/:id',
    component: EditarItemComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
