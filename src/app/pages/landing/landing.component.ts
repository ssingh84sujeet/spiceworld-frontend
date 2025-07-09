import { Component, OnInit } from '@angular/core';
import { LandingService, LandingData } from '../../services/landing.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  data!: LandingData;

  constructor(private landingService: LandingService) {}

  ngOnInit(): void {
    // this.landingService.getLandingContent().subscribe(res => {
    //   this.data = res;
    // });
  }
}
