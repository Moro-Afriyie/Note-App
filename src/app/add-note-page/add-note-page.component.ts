import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note-page',
  templateUrl: './add-note-page.component.html',
  styleUrls: ['./add-note-page.component.scss']
})

export class AddNotePageComponent implements OnInit {
  addNoteForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.addNoteForm = new FormGroup({
      title:  new FormControl('', Validators.required),
      body: new FormControl('', Validators.required)
    }
     
    );
  }

// get the form controls
  get f(){
    return this.form.controls;
  }

  onSubmit(): void{
    console.log(this.addNoteForm.value)

  }
  onCancel(){
    // navigate to the main page
    this.router.navigate(['/']);
  }

}
