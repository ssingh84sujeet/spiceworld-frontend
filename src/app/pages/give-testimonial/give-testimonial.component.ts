import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-give-testimonial',
  templateUrl: './give-testimonial.component.html',
  styleUrls: ['./give-testimonial.component.css']
})
export class GiveTestimonialComponent {
  testimonialForm: FormGroup;
  selectedFile: File | null = null;
  successMsg = '';
  errorMsg = '';

  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.testimonialForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      message: ['', Validators.required],
      image: [null, Validators.required]
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.testimonialForm.patchValue({ image: file });
      this.testimonialForm.get('image')?.updateValueAndValidity();
    }
  }

  submitForm() {
    if (!this.testimonialForm.valid || !this.selectedFile) {
      this.errorMsg = 'All fields are required.';
      this.successMsg = '';
      return;
    }

    const formData = new FormData();
    formData.append('name', this.testimonialForm.get('name')?.value);
    formData.append('location', this.testimonialForm.get('location')?.value);
    formData.append('message', this.testimonialForm.get('message')?.value);
    formData.append('image', this.selectedFile);

    this.http.post('http://localhost:8080/api/testimonials', formData).subscribe({
      next: () => {
        this.successMsg = 'Thank you for your feedback!';
        this.errorMsg = '';
        this.testimonialForm.reset();
        this.selectedFile = null;

        // Clear file input visually
        if (this.fileInput) {
          this.fileInput.nativeElement.value = '';
        }
      },
      error: () => {
        this.successMsg = '';
        this.errorMsg = 'Submission failed. Try again.';
      }
    });
  }
}
