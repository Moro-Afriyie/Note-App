export class NoteDetailsModule{
    // fields
    day: string;
    month: string;
    title: string;
    body: string;
    
  
    constructor(day:string, month: string, title: string, body: string){
      this.day = day;
      this.month = month;
      this.title = title;
      this.body = body;
    }
  }