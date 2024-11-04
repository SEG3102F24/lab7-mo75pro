import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = 'http://localhost:8080/books-api/authors';

  constructor(private http: HttpClient) {}

  getAuthorById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
