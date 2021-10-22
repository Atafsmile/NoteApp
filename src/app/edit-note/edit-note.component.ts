import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {
noteForm;
  constructor(private activateRoute: ActivatedRoute,private noteService:NoteService,private router:Router) { 
    this.noteForm=new FormGroup({
      tskName:new FormControl('',[Validators.required]),
      tskDescription:new FormControl('',[Validators.required,Validators.minLength(2)])
    });
    let data= this.noteService.getNoteById(
      this.activateRoute.snapshot.params['id']
     );
  
this.noteForm.setValue(data);

  }

  ngOnInit(): void {
  }
  
    
   update(){
    this.noteService.upDateNote(
      this.activateRoute.snapshot.params['id'],
      this.noteForm.value
    );

     
      this.router.navigate(['/']);
  }

  }
