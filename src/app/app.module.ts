import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatUserComponent } from './creat-user/creat-user.component';
import { NotelistComponent } from './notelist/notelist.component';
import { EditNoteComponent } from './edit-note/edit-note.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatUserComponent,
    NotelistComponent,
    EditNoteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
