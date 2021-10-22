import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatUserComponent } from './creat-user/creat-user.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { NotelistComponent } from './notelist/notelist.component';

const routes: Routes = [

    
    {path:'creat',component:NotelistComponent},

    {path:'edit-note/:id',component:EditNoteComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
