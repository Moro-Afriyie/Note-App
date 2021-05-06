import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotepadPageComponent } from './notepad-page/notepad-page.component';
import { AddNotePageComponent } from './add-note-page/add-note-page.component';
import { ViewNotePageComponent } from './view-note-page/view-note-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NotepadPageComponent,
    AddNotePageComponent,
    ViewNotePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
