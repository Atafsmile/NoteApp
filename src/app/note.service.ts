import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
NoteData=[];
  constructor() { }

getNoteData(){
  return this.NoteData;
}
getNoteById(id:number){
  return this.NoteData[id];
}
upDateNote(id:number,data){
  return this.NoteData[id]=data;
}
creatNote(data: any) {
  this.NoteData.push(data);
}
deleteNote(id:number){
  this.NoteData.splice(id,1);

}
}