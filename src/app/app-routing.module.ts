import { AddNotePageComponent } from './add-note-page/add-note-page.component';
import { NotepadPageComponent } from './notepad-page/notepad-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: MainPageComponent, children: [
    {path:'', component: NotepadPageComponent},
    {path: 'addNote', component: AddNotePageComponent},
    {path: 'editNote:id', component: AddNotePageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
