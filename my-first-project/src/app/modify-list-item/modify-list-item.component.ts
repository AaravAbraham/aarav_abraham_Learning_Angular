import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from '../services/instrument-store.service';  // Your service
import { ActivatedRoute, Router } from '@angular/router';  // For routing

@Component({
  selector: 'app-modify-list-item',
  templateUrl: './modify-list-item.component.html',
  styleUrls: ['./modify-list-item.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class ModifyListItemComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private storeService: StoreService, 
    private route: ActivatedRoute, // To get route parameters
    private router: Router  // For navigation after edit
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      description: [''],
      price: [0, [Validators.required, Validators.min(0)]],
      type: ['', Validators.required],
    });

    // Get the ID from route params for editing the item
    const idToEdit = this.route.snapshot.paramMap.get('id'); // Dynamic ID from URL

    if (idToEdit) {
      this.storeService.getContentById(Number(idToEdit)).subscribe((item) => {
        if (item) {
          this.form.patchValue(item);  // Pre-fill the form with the existing item data
        }
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const formValue = this.form.value;
      if (formValue.id) {
        // Update existing item
        this.storeService.updateContent(formValue).subscribe(() => {
          console.log('Item updated:', formValue);
          this.router.navigate(['home']);  // Navigate to the list view after successful update
        });
      } else {
        // Add new item
        this.storeService.addContent(formValue).subscribe(() => {
          console.log('Item added:', formValue);
          this.router.navigate(['home']);  // Navigate to the list view after adding
        });
      }
      this.resetForm();  // Reset the form after submission
    }
  }

  resetForm() {
    this.form.reset();
  }
}
