
import { Component, OnInit } from '@angular/core';

import { NoteService } from '../note.service';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css']
})
export class NotelistComponent implements OnInit {
data:any=[];
  constructor(private noteService:NoteService) { 
    
    
    this.data= this.noteService.getNoteData();
    
  }

  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('id')));

  }
  deleteNote(id){
    
    this.noteService.deleteNote(id);
    
  }

}
