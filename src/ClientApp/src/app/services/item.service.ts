import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item'; // Define this model according to your backend schema
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = environment.apiUrl; // Update to your backend URL

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}/items/all`);
  }

  getItemById(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.apiUrl}/item/${id}`);
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(`${this.apiUrl}/item`, item);
  }

  updateItem(id: number, item: Item): Observable<any> {
    return this.http.put(`${this.apiUrl}/item/${id}`, item);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/item/${id}`);
  }
}
