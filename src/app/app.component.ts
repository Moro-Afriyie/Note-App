import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NoteApp';
  constructor(private router: Router){}

  ngOnInit(): void {
    // automatic routing to the addNote page when the page Loads
  // this.router.navigate(['/addNote']);
  }
}
