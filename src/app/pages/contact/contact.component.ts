import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  get whatsappUrl() {
    const encodedMessage = encodeURIComponent(this.contact.message);
    return `https://wa.me/919821718194?text=${encodedMessage}`;
  }

  onSubmit() {
    this.http.post('http://localhost:8080/api/contact', this.contact).subscribe({
      next: () => {
        this.successMessage = 'Message sent successfully!';
        this.errorMessage = '';
        this.contact = { name: '', email: '', message: '' };
      },
      error: () => {
        this.errorMessage = 'Error sending message. Please try again.';
        this.successMessage = '';
      }
    });
  }
}
