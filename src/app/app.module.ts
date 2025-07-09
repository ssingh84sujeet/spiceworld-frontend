import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { SpicesComponent } from './pages/spices/spices.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { GiveTestimonialComponent } from './pages/give-testimonial/give-testimonial.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent  } from './pages/admin-login/admin-login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AddEditSpiceComponent } from './pages/add-edit-spice/add-edit-spice.component';
import { TestimonialDetailComponent } from './pages/testimonial-detail/testimonial-detail.component';
import { FaqComponent } from './pages/faq/faq.component';
import { AboutComponent } from './pages/about/about.component'; 


@NgModule({
  declarations: [
   AppComponent,
    LandingComponent,
    SpicesComponent,
    NavbarComponent,
    ContactComponent,
    FooterComponent,
    GiveTestimonialComponent,
    TestimonialComponent,
    AdminLoginComponent ,
    AdminDashboardComponent,
    AddEditSpiceComponent,
    TestimonialDetailComponent,
    FaqComponent,
    AboutComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
