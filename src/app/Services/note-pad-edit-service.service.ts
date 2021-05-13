import { Injectable } from '@angular/core';
import {NoteDetailsModule } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NotePadEditServiceService {

  // fields
  private noteDetailsArray: NoteDetailsModule[];
  private note: Date;
  //Date array
  private monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', "May", 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]
  day: string;
  noteDetails: NoteDetailsModule;
  constructor(){
    // this.note = new Date();
    // this.noteDetails = new NoteDetailsModule(
    // this.note.getDate(),
    // this.monthsArr[this.note.getMonth()],
    // "Moro",
    // "lorem ipsum"
    // );
    // console.log(this.noteDetails);
  }

  //create a new note
  createNote(title: string, body: string){
    this.note = new Date(); // create an object of the date class
    this.day = this.note.getDate().toString() // convert the day to string
    if(this.day.length<2)
      this.day = "0"+this.day; // make it double figures if it's a single digit
    // create an object of the NoteDetailsModule
    this.noteDetails = new NoteDetailsModule(
    this.day,
    this.monthsArr[this.note.getMonth()],
    title,
    body,
    );
    // push it into the array
    this.noteDetailsArray.push(this.noteDetails);
    console.log(this.noteDetailsArray);

    // store the array in local storage

  }

  // get the notes
  getNote(){
    // returns a copy of the array
    return this.noteDetailsArray.slice();
  }
  
  //edit the notes
  updateNote(){

  }

  // delte the note
  deleteNote(){

  }
}

