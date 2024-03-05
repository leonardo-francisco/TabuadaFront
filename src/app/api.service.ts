import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://localhost:7012/api/Tabuada/processar'; // Atualize com sua API URL

  constructor(private http: HttpClient) { }

  processNumbers(numeros: number[]): Observable<string[]> {
    return this.http.post<string[]>(this.apiUrl, numeros);
  }
}
