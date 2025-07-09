// src/app/services/spice.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Spice {
  id?: number; 
  name: string;
  description: string;
  price: number;
  origin?: string;
  imageUrl: string;  
}

@Injectable({ providedIn: 'root' })
export class SpiceService {
  private apiUrl = 'http://localhost:8080/api/spices';

  constructor(private http: HttpClient) {}

  getAllSpices(): Observable<Spice[]> {
    return this.http.get<Spice[]>(this.apiUrl);
  }

  getSpiceById(id: number): Observable<Spice> {
    return this.http.get<Spice>(`${this.apiUrl}/${id}`);
  }

  addSpice(spiceData: FormData): Observable<any> {
  return this.http.post(this.apiUrl, spiceData);
}
  updateSpice(id: number, spiceData: FormData): Observable<any> {
  return this.http.put(`${this.apiUrl}/${id}`, spiceData);
}

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
