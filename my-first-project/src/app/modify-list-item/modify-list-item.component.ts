import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from '../services/instrument-store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HighlightOnFocusDirective } from '../components/highlight-on-focus.directive';
import { HoverHighlightDirective } from '../directives/hover-highlight.directive';
@Component({
  selector: 'app-modify-list-item',
  templateUrl: './modify-list-item.component.html',
  styleUrls: ['./modify-list-item.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,HighlightOnFocusDirective,HoverHighlightDirective]
})
export class ModifyListItemComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private storeService: StoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      description: [''],
      price: [0, [Validators.required, Validators.min(0)]],
      type: ['', Validators.required],
    });

    const idToEdit = this.route.snapshot.paramMap.get('id');
    if (idToEdit) {
      this.storeService.getContentById(Number(idToEdit)).subscribe((item) => {
        if (item) {
          this.form.patchValue(item);
        }
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const formValue = this.form.value;
      if (formValue.id) {
        this.storeService.updateContent(formValue).subscribe(() => {
          this.router.navigate(['home']);
        });
      } else {
        this.storeService.addContent(formValue).subscribe(() => {
          this.router.navigate(['home']);
        });
      }
      this.resetForm();
    }
  }

  resetForm() {
    this.form.reset();
  }
}
