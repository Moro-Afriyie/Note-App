import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {NoteDetailsModule } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NotePadEditServiceService {
  body: string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quibusdam accusantium nemo illo quas? Maiores minima veritatis laborum deleniti, tempora vero ipsum! Sequi unde nostrum minus cum, dolor dolores temporibus.";

  // fields
  private noteDetailsArray: NoteDetailsModule[]=[
    new NoteDetailsModule("10", "Mar", "Title1", this.body),
    new NoteDetailsModule("11", "Apr", "Title2", this.body),
    new NoteDetailsModule("12", "May", "Title3", this.body),
    new NoteDetailsModule("12", "May", "Title3",  "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"),
   
  ];
  private note: Date;
  //Date array
  private monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', "May", 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]
  day: string;
  noteDetails: NoteDetailsModule;
  editNote = new Subject<{edit: boolean, index:number, note: NoteDetailsModule}>(); // subject to transfer the data from the service to the other components
  constructor(){
    // localStorage.setItem("note", JSON.stringify(this.noteDetailsArray));
  }
  // local storage function
  saveToLocalStorage(note: NoteDetailsModule[]){
    localStorage.setItem("note", JSON.stringify(note));
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

// this.noteDetailsArray = this.getNote();
// console.log("note details array from service: ", this.noteDetailsArray);
    // push it into the array
    this.noteDetailsArray.push(this.noteDetails);
    console.log("note details array from service: ", this.noteDetailsArray);

    // store the array in local storage
    this.saveToLocalStorage(this.noteDetailsArray);

    // this.newNotesCreatedArray.next(this.noteDetails);
  }

  // get the notes
  getNote(){
    // get the array from local storage
    this.noteDetailsArray = JSON.parse(localStorage.getItem("note") || "[]");
    console.log(this.noteDetailsArray);
    // returns a copy of the array
    return this.noteDetailsArray.slice();
  }
  
  //edit the notes
  updateNote(index: number, note: NoteDetailsModule){
    // update the index with the new note
    console.log(this.noteDetailsArray[index]);
    this.noteDetailsArray[index]= note;
    
      // save to local storage
       this.saveToLocalStorage(this.noteDetailsArray);

  }

  // delte the note
  deleteNote(index: number){
    this.noteDetailsArray.splice(index, 1); // delete the card
      this.noteDetailsArray = [...this.noteDetailsArray]; // update the list
      console.log(this.noteDetailsArray);

      // save to local storage
      this.saveToLocalStorage(this.noteDetailsArray);

  }
 
}

