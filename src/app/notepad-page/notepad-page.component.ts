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
  
  constructor(private router: Router) {
  // note pad list
  this.note = new Date();
  this.day = this.note.getDate().toString()
    if(this.day.length<2)
      this.day = "0"+this.day;
    this.noteDetails = new NoteDetailsModule(
    this.day,
    this.monthsArr[this.note.getMonth()],
    this.title,
    this.body,
    );
    console.log(this.noteDetails);  
    this.notepadListArray.push(this.noteDetails);
    this.notepadListArray.push(this.noteDetails);
    this.notepadListArray.push(this.noteDetails);
    console.log(this.notepadListArray);

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
  }

  onCardClicked(){
    this.router.navigate(['/viewNote']);
  }
  onAddNoteClicked(){
    this.router.navigate(['/addNote']);
  }

  // when the delete button is pressed
  onDeleteNote(){
    
    // animation effect on the cards
    (function(){

      /*
      * Get all the buttons actions
      */
      let optionBtns = document.querySelectorAll( '.js-option' );
    
      for(var i = 0; i < optionBtns.length; i++ ) {
    
        /*
        * When click to a button
        */
        optionBtns[i].addEventListener( 'click', function ( e ){
    
          var notificationCard = this.parentNode.parentNode;
          console.log(notificationCard);
          var clickBtn = this;
          /*
          * Execute the delete or Archive animation
          */
          requestAnimationFrame( function(){ 
    
            archiveOrDelete( clickBtn, notificationCard );
    
            /*
            * Add transition
            * That smoothly remove the blank space
            * Leaves by the deleted notification card
            */
            window.setTimeout( function( ){
              requestAnimationFrame( function() {
                notificationCard.style.transition = 'all .4s ease';
                notificationCard.style.height = 0;
                notificationCard.style.margin = 0;
                notificationCard.style.padding = 0;
              });
    
              /*
              * Delete definitely the animation card
              */
              window.setTimeout( function( ){
                notificationCard.parentNode.removeChild( notificationCard );
              }, 1500 );
            }, 1500 );
          });
        })
      }
    
      /*
      * Function that adds
      * delete or archive class
      * To a notification card
      */
      var archiveOrDelete = function( clickBtn, notificationCard ){
        if( clickBtn.classList.contains( 'archive' ) ){
          notificationCard.classList.add( 'archive' );
        } else if( clickBtn.classList.contains( 'delete' ) ){
          notificationCard.classList.add( 'delete' );
        }
      }
    
    })();
  }
}
