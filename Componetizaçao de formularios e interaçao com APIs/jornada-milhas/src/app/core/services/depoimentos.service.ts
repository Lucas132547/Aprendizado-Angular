import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { depoimento, Promocao } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class DepoimentosService {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  listarDepoimentos(): Observable<depoimento[]> {
    return this.httpClient.get<depoimento[]>(`${this.apiUrl}/depoimentos`);
  }
}
