import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { SpicesComponent } from './pages/spices/spices.component';
import { ContactComponent } from './pages/contact/contact.component';
import {GiveTestimonialComponent} from './pages/give-testimonial/give-testimonial.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { AdminLoginComponent  } from './pages/admin-login/admin-login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AddEditSpiceComponent } from './pages/add-edit-spice/add-edit-spice.component';
import { TestimonialDetailComponent } from './pages/testimonial-detail/testimonial-detail.component';
import { FaqComponent } from './pages/faq/faq.component';
import { AboutComponent } from './pages/about/about.component';
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'spices', component: SpicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'give-testimonial', component: GiveTestimonialComponent },
  { path: 'testimonials', component: TestimonialComponent },
  { path: 'login', component: AdminLoginComponent  },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'admin/add-spice', component: AddEditSpiceComponent },
  { path: 'admin/edit-spice/:id', component: AddEditSpiceComponent },
  { path: 'testimonial/:id', component: TestimonialDetailComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'about', component: AboutComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
