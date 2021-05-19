import { NotePadEditServiceService } from './../Services/note-pad-edit-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NoteDetailsModule } from '../models/note.model';

@Component({
  selector: 'app-notepad-page',
  templateUrl: './notepad-page.component.html',
  styleUrls: ['./notepad-page.component.scss']
})
export class NotepadPageComponent implements OnInit {
  // array to store a copy of  the notepadLists
  notepadListArray: NoteDetailsModule[]=[];
  searchText='';
  
  constructor(private router: Router, private notePadEditService: NotePadEditServiceService) {}

  ngOnInit(): void {
    this.notepadListArray =  this.notePadEditService.getNote();
    
  }

  // when the user focuses on the input
  onFocus(){
    const finder:any = document.querySelector(".finder");
    finder.classList.add("active");

  }

  // blur event listener
  onBlur(){
    const input:any = document.querySelector(".finder__input");
    const finder:any = document.querySelector(".finder");
  if (input.value.length === 0) {
    finder.classList.remove("active");
  }
  }

  // keyUp event function
  onKeyUp(){
    const input:any = document.querySelector(".finder__input");
    const finder:any = document.querySelector(".finder");
    finder.classList.add("processing");
    finder.classList.remove("active");
  setTimeout(() => {
    finder.classList.remove("processing");
    if (input.value.length > 0) {
      finder.classList.add("active");
    }
  }, 1000);

  }
  
  onCardClicked(){
    this.router.navigate(['/addNote']);
  }
  onAddNoteClicked(){
    this.router.navigate(['/addNote']);
  }

  // when the delete button is pressed
  onDeleteNote(index: number){
    console.log('index: ', index);
    let optionBtns = document.querySelectorAll('.js-option');

     // set setTimeout to allow the deletion to happen
     setTimeout(() => {
      this.notepadListArray.splice(index, 1); // delete the card
      this.notepadListArray = [...this.notepadListArray]; // update the list
      console.log(this.notepadListArray);
    }, 3200);

    var notepadCards: any = optionBtns[index].parentNode;
    console.log(notepadCards);
   
     /*
     * Execute the delete animation
     */
     requestAnimationFrame(() => {
      DeleteNote(notepadCards);

      /*
       * Add transition
       * That smoothly remove the blank space
       * Leaves by the deleted notification card
       */
      window.setTimeout(() => {
        requestAnimationFrame(() => {
          notepadCards.style.transition = 'all .4s ease';
          notepadCards.style.height = 0;
          notepadCards.style.margin = 0;
          notepadCards.style.padding = 0;
        });

        /*
         * Delete definitely the animation card
         */
        window.setTimeout(() => {
          notepadCards.parentNode.removeChild(notepadCards);
         }, 1500);
      }, 1500);
    });
     /*
     * Function that adds
     * delete or archive class
     * To a notification card
     */
     var DeleteNote = (notepadCards) => {
      notepadCards.classList.add('delete');
    };
  
  }
}
