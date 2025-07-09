import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Testimonial, TestimonialService } from '../../services/testimonial.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  testimonials: Testimonial[] = [];

  constructor(
    private testimonialService: TestimonialService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.testimonialService.getTestimonials().subscribe({
      next: (data: Testimonial[]) => {
        this.testimonials = data;

        // Start auto-scroll only if in browser
        if (isPlatformBrowser(this.platformId)) {
          setInterval(() => this.scrollNext(), 3000);
        }
      },
      error: (err: HttpErrorResponse) => {
        console.error('Failed to load testimonials', err);
      }
    });
  }

  viewDetail(id: number): void {
    this.router.navigate(['/testimonial', id]);
  }

  getImageUrl(path: string): string {
    return `http://localhost:8080${path}`;
  }

  scrollNext(): void {
    if (isPlatformBrowser(this.platformId)) {
      const container = document.getElementById('testimonial-scroll');
      if (container) {
        container.scrollBy({ left: 320, behavior: 'smooth' });
      }
    }
  }
}
