import { Injectable } from '@angular/core';
import { Item } from './item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private readonly API = 'http://localhost:3000/itens'

  constructor(private http: HttpClient) { }

  listar(): Observable<Item[]>{
    return this.http.get<Item[]>(this.API)
  }

  criar(item: Item): Observable<Item> {
    return this.http.post<Item>(this.API,item)
}

excluir(id: number): Observable<Item> {
  const url = `${this.API}/${id}`
  return this.http.delete<Item>(url)
}

buscarPorId(id: number): Observable<Item> {
  const url = `${this.API}/${id}`
  return this.http.get<Item>(url)
}

editar(item: Item): Observable<Item> {
  const url = `${this.API}/${item.id}`
  return this.http.put<Item>(url, item)
}

}
