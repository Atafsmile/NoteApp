import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-creat-user',
  templateUrl: './creat-user.component.html',
  styleUrls: ['./creat-user.component.css']
})
export class CreatUserComponent implements OnInit {
noteForm:FormGroup;

  constructor(private activateRoute: ActivatedRoute,private noteService:NoteService,private router:Router) {
    this.noteForm=new FormGroup({
      tskName:new FormControl('',[Validators.required]),
      tskDescription:new FormControl('',[Validators.required,Validators.minLength(2)])
    });
    

   }
   

  ngOnInit() {
     }
 AddTask():any{
  if(this.noteForm.valid){
    alert('valid form');
  let d1=  this.noteService.creatNote(this.noteForm.value);
    localStorage.setItem('id',JSON.stringify(this.noteForm.value));
    this.router.navigate(['/'])
    console.log(this.noteForm.value)
    console.log(JSON.parse(localStorage.getItem('id')));

    this.noteForm.reset();
  }else{
    alert('not valid plase create ur notes')
    
  }

}
}
