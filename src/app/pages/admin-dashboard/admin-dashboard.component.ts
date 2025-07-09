// src/app/pages/admin-dashboard/admin-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpiceService } from '../../services/spice.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  spices: any[] = [];

  constructor(private spiceService: SpiceService, private router: Router) {}

  ngOnInit(): void {
    this.loadSpices();
  }

  loadSpices() {
    this.spiceService.getAllSpices().subscribe(data => this.spices = data);
  }

  editSpice(id: number) {
    this.router.navigate(['/admin/edit-spice', id]);
  }

  deleteSpice(id: number) {
    this.spiceService.remove(id).subscribe(() => this.loadSpices());
  }

  addSpice() {
    this.router.navigate(['/admin/add-spice']);
  }
}