import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotepadPageComponent } from './notepad-page/notepad-page.component';
import { AddNotePageComponent } from './add-note-page/add-note-page.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './models/material.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NotepadPageComponent,
    AddNotePageComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
