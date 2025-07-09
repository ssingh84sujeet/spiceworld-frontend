import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost:8080/api/admin'; // <-- FIXED

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.post<boolean>(`${this.baseUrl}/login`, null, { params });
  }
}
