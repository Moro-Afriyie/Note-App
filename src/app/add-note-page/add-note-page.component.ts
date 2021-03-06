import { NoteDetailsModule } from './../models/note.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  index:number;
  title: string;
 

  constructor(private router: Router, private notePadEditServcie: NotePadEditServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get the index from the url
  this.route.paramMap.subscribe( params =>{
  this.index = parseInt(params.get('id')); // set the index to the index in the url
  this.noteDetails = this.notePadEditServcie.getEditNote(this.index);
  }
  );

  // edit the note
  if(this.index>=0){
    this.title = 'Edit Note';
    this.addNoteForm = new FormGroup({
      title:  new FormControl(this.noteDetails.title, Validators.required),
      body: new FormControl(this.noteDetails.body, Validators.required)
    }
    );
  }

  // add a new note
  else{
    this.title ="Create Note";
    this.addNoteForm = new FormGroup({
      title:  new FormControl(null, Validators.required),
      body: new FormControl(null, Validators.required)
    }
    );
  }
};

 

// get the form controls
  get f(){
    return this.addNoteForm.controls;
  }

  onSubmit(): void{
    // update the note
    if(this.index>=0){
      this.notePadEditServcie.updateNote(this.index, this.addNoteForm.value.title, this.addNoteForm.value.body.toString());
    }

    // add a new note
    else{
      // update the notpadLists from the service
      this.notePadEditServcie.createNote(this.addNoteForm.value.title, this.addNoteForm.value.body.toString());
    }
    
    // navigate to the main page
    this.router.navigate(['/']);

  }
  onCancel(){
    // navigate to the main page
    this.router.navigate(['/']);
  }

}
