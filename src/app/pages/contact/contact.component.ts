import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButton],
  templateUrl: './contact.component.html',
  styles: ``
})
export class ContactComponent {

  formContact: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formContact = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required, Validators.required
      ])],
      phone: ['', Validators.required],
    })
  }

}
