class Book {
  constructor(title,author,years){
  this.title=title;
  this.author=author;
  this.years=years;
  }
  getsummary(){
   return `${this.title} weiten by ${this.author} in ${this .years}`
 
  }
 }
 class magazine extends Book{
  constructor(title,author,year,month){
   super(title,author,year);
   this.month=month;
  }
 }
 const mag1=new magazine('book 1','hasya','2000','jan')
 console.log(mag1.getsummary())