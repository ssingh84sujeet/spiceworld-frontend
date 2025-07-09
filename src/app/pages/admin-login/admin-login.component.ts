import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';


@Component({
  selector: 'app-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent  {
  username = '';
  password = '';
  errorMessage = '';
error: any;

  constructor(private adminService: AdminService, private router: Router) {}

  login() {
    this.adminService.login(this.username, this.password).subscribe({
      next: (isValid) => {
        if (isValid) {
         this.router.navigate(['/admin']); // Or wherever you redirect
        } else {
          this.errorMessage = 'Invalid username or password.';
        }
      },
      error: (err) => {
        this.errorMessage = 'Login failed. Server error.';
        console.error('Login error:', err);
      }
    });
  }
}
