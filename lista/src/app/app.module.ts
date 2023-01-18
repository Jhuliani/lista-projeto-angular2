import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarItemComponent } from './componentes/itens/criar-item/criar-item.component';
import { FormsModule } from '@angular/forms';
import { ListarItemComponent } from './componentes/itens/listar-item/listar-item.component';
import { ItemComponent } from './componentes/itens/item/item.component';
import { ExcluirItemComponent } from './componentes/itens/excluir-item/excluir-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarItemComponent,
    ListarItemComponent,
    ItemComponent,
    ExcluirItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
