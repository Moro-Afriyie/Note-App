import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-note-page',
  templateUrl: './add-note-page.component.html',
  styleUrls: ['./add-note-page.component.scss']
})

export class AddNotePageComponent implements OnInit {
  addNoteForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.addNoteForm = new FormGroup({
      title:  new FormControl('', Validators.required),
      body: new FormControl('', Validators.required)
    }
     
    );
  }

  onSubmit(): void{
    console.log(this.addNoteForm.value)

  }

}
