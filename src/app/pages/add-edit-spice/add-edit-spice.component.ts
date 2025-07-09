// src/app/pages/add-edit-spice/add-edit-spice.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SpiceService } from '../../services/spice.service';

@Component({
  selector: 'app-add-edit-spice',
  templateUrl: './add-edit-spice.component.html',
  styleUrls: ['./add-edit-spice.component.css']
})
export class AddEditSpiceComponent implements OnInit {
  spiceForm: FormGroup;
  isEditMode = false;
  spiceId: number | null = null;
  imageFile: File | null = null;
  imagePreview: string | null = null;

  constructor(
    private fb: FormBuilder,
    private spiceService: SpiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.spiceForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      price: ['', Validators.required],
      origin: ['']
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.spiceId = +idParam;
      this.isEditMode = true;
      this.spiceService.getSpiceById(this.spiceId).subscribe(spice => {
        this.spiceForm.patchValue({
          name: spice.name,
          description: spice.description,
          price: spice.price,
          origin: spice.origin
        });
        this.imagePreview = `http://localhost:8080${spice.imageUrl}`;
      });
    }
  }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.imageFile = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(this.imageFile);
    }
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('name', this.spiceForm.value.name);
    formData.append('description', this.spiceForm.value.description || '');
    formData.append('price', this.spiceForm.value.price);
    formData.append('origin', this.spiceForm.value.origin || '');
    
    if (this.imageFile) {
      formData.append('image', this.imageFile);
    }

    if (this.isEditMode && this.spiceId !== null) {
      this.spiceService.updateSpice(this.spiceId, formData).subscribe(() => {
        this.router.navigate(['/admin']);
      });
    } else {
      this.spiceService.addSpice(formData).subscribe(() => {
        this.router.navigate(['/admin']);
      });
    }
  }
  
}
