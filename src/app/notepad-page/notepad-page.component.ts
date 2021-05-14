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
  body: string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quibusdam accusantium nemo illo quas? Maiores minima veritatis laborum deleniti, tempora vero ipsum! Sequi unde nostrum minus cum, dolor dolores temporibus.";
  title: string = "Title";
  // fields
  noteDetails: NoteDetailsModule;
  // array to store a copy of  the notepadLists
  notepadListArray: NoteDetailsModule[]=[];
  note: Date;
  private day: string;
  //Date array
  monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', "May", 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]
  noteDetails1: NoteDetailsModule;
  noteDetails2: NoteDetailsModule;
  noteDetails3: NoteDetailsModule;
  
  constructor(private router: Router, private notePadEditServcie: NotePadEditServiceService) {
    // get the array from local storage
    this.notepadListArray = JSON.parse(localStorage.getItem("note") || "[]");
  // note pad list
  // this.note = new Date();
  // this.day = this.note.getDate().toString()
  //   if(this.day.length<2)
  //     this.day = "0"+this.day;
  //   this.noteDetails1 = new NoteDetailsModule(
  //   this.day,
  //   this.monthsArr[this.note.getMonth()],
  //   this.title,
  //   this.body,
  //   );

  //   // 2nd object
  //   this.noteDetails2 = new NoteDetailsModule(
  //     this.day,
  //     this.monthsArr[this.note.getMonth()],
  //     this.title,
  //     this.body,
  //     );

  //     //3rd object
  //     this.noteDetails3 = new NoteDetailsModule(
  //       this.day,
  //       this.monthsArr[this.note.getMonth()],
  //       this.title,
  //       this.body,
  //       );
  //   console.log(this.noteDetails);  
  //   this.notepadListArray.push(this.noteDetails1);
  //   this.notepadListArray.push(this.noteDetails2);
  //   this.notepadListArray.push(this.noteDetails3);
  //   console.log(this.notepadListArray);

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
   }

  ngOnInit(): void {
    this.notePadEditServcie.newNotesCreatedArray.subscribe(res=>{
      this.notepadListArray = res;
      console.log("notepad list array: ", this.notepadListArray);
    })
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
