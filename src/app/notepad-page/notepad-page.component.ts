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
  
  
  constructor(private router: Router, private notePadEditService: NotePadEditServiceService) {

// const input:any = document.querySelector(".finder__input");
// const finder:any = document.querySelector(".finder");
// const form:any = document.querySelector("form");

// input.addEventListener("focus", () => {
//   finder.classList.add("active");
// });

// input.addEventListener("blur", () => {
//   if (input.value.length === 0) {
//     finder.classList.remove("active");
//   }
// }); 

// form.addEventListener("submit", (ev) => {
//   ev.preventDefault();
//   finder.classList.add("processing");
//   finder.classList.remove("active");
//   input.disabled = true;
//   setTimeout(() => {
//     finder.classList.remove("processing");
//     input.disabled = false;
//     if (input.value.length > 0) {
//       finder.classList.add("active");
//     }
//   }, 1000);
// });
// this.notePadEditServcie.newNotesCreatedArray.subscribe(res=>{
//   this.notepadListArray.push(res);
//   console.log("notepad list array: ", this.notepadListArray);
// })
   }

  ngOnInit(): void {
    // this.notePadEditServcie.newNotesCreatedArray.subscribe(res=>{
    //   this.notepadListArray.push(res);
    //   // console.log("updated list array: ", this.updatedArray);
    //   // this.notepadListArray = this.updatedArray.slice();
    // console.log("notepad list array: ", this.notepadListArray);
    // });

    this.notepadListArray =  this.notePadEditService.getNote();
    
  }

  // when the user focuses on the input
  onFocus(){
    const input:any = document.querySelector(".finder__input");
    const finder:any = document.querySelector(".finder");
    const form:any = document.querySelector("form");

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
