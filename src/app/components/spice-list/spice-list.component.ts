import { Component, OnInit } from '@angular/core';
import { SpiceService, Spice } from '../../services/spice.service';

@Component({
  selector: 'app-spice-list',
  templateUrl: './spice-list.component.html'
})
export class SpiceListComponent implements OnInit {
  spices: Spice[] = [];

  constructor(private spiceService: SpiceService) {}

  ngOnInit(): void {
    this.loadSpices();
  }

  loadSpices() {
    this.spiceService.getAll().subscribe(data => {
      this.spices = data;
    });
  }

  removeSpice(id: number) {
    this.spiceService.remove(id).subscribe(() => {
      this.loadSpices();
    });
  }
}
