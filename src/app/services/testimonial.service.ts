import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  message: string;
  imagePath: string;
}

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  private baseUrl = 'http://localhost:8080/api/testimonials';

  constructor(private http: HttpClient) {}

  getTestimonials(): Observable<Testimonial[]> {
    return this.http.get<Testimonial[]>(this.baseUrl);
  }

  getTestimonialById(id: number): Observable<Testimonial> {
    return this.http.get<Testimonial>(`${this.baseUrl}/${id}`);
  }
}
