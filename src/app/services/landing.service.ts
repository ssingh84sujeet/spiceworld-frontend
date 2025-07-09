import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LandingData {
  banner: string;
  slogan: string;
  heroImageUrl: string;
  intro: string;
  ctaText: string;
  ctaLink: string;
}

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  private apiUrl = 'http://localhost:8080/api/landing';

  constructor(private http: HttpClient) {}

  getLandingContent(): Observable<LandingData> {
    return this.http.get<LandingData>(this.apiUrl);
  }
}
