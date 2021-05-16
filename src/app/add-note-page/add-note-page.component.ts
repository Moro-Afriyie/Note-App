import { NoteDetailsModule } from './../models/note.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotePadEditServiceService } from '../Services/note-pad-edit-service.service';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-add-note-page',
  templateUrl: './add-note-page.component.html',
  styleUrls: ['./add-note-page.component.scss']
})

export class AddNotePageComponent implements OnInit {
  addNoteForm: FormGroup;
  noteDetails: NoteDetailsModule;

  constructor(private router: Router, private notePadEditServcie: NotePadEditServiceService) { }

  ngOnInit(): void {
    this.addNoteForm = new FormGroup({
      title:  new FormControl('', Validators.required),
      body: new FormControl('', Validators.required)
    }
     
    );
  }

// get the form controls
  get f(){
    return this.addNoteForm.controls;
  }

  onSubmit(): void{
    console.log(this.addNoteForm.value);
    // update the notpadLists from the service
    this.notePadEditServcie.createNote(this.addNoteForm.value.title, this.addNoteForm.value.body.toString());
    
    // navigate to the main page
    this.router.navigate(['/']);

  }
  onCancel(){
    // navigate to the main page
    this.router.navigate(['/']);
  }

}
