import { Component, OnInit } from '@angular/core';
import { Spice, SpiceService } from '../../services/spice.service';

@Component({
  selector: 'app-spices',
  templateUrl: './spices.component.html',
  styleUrls: ['./spices.component.css']
})
export class SpicesComponent implements OnInit {
  spices: Spice[] = [];

  constructor(private spiceService: SpiceService) {}

  ngOnInit(): void {
    this.loadSpices();
  }

  loadSpices() {
    this.spiceService.getAllSpices().subscribe((data: Spice[]) => {
  this.spices = data;
});
  }

  deleteSpice(id: number | undefined) {
    if (!id) return;
    if (confirm("Are you sure you want to delete this spice?")) {
      this.spiceService.remove(id).subscribe(() => this.loadSpices());
    }
  }
  getImageUrl(path: string): string {
    return `http://localhost:8080${path}`;
  }
}
