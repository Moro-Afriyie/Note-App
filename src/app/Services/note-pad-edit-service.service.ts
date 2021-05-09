import { Injectable } from '@angular/core';
import {NoteDetailsModule } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NotePadEditServiceService {

  // fields
  private noteDetails: NoteDetailsModule;
  private note: Date;
  //Date array
  private monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', "May", 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]
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

  getNote(){
    
  }
}

