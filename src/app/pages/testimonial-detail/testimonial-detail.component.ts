import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Testimonial, TestimonialService } from '../../services/testimonial.service';


@Component({
  selector: 'app-testimonial-detail',
  templateUrl: './testimonial-detail.component.html',
  styleUrls: ['./testimonial-detail.component.css']
})
export class TestimonialDetailComponent implements OnInit {
  testimonial: Testimonial | null = null;

  constructor(
    private route: ActivatedRoute,
    private testimonialService: TestimonialService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.testimonialService.getTestimonialById(+id).subscribe({
        next: (data: Testimonial) => this.testimonial = data,
        error: (err: any) => console.error('Failed to load testimonial:', err)
      });
    }
  }

  getImageUrl(path?: string): string {
  return path ? `http://localhost:8080${path}` : 'assets/default-user.png';
}
}
