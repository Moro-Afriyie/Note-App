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
  private noteDetails: NoteDetailsModule;
  private note: Date;
  //Date array
  private monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', "May", 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]
  
  constructor(private router: Router) {
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
}
