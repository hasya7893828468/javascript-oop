function Book(title,author,year){
  this.title=title;
  this.author=author;
  this.year=year;
  this.getsummary=function(){
    return`${this.title} is writen by ${this.author} in ${this.year}`
  }
 }

const book1=new Book('book1','ram','2000')
const book2=new Book('book two','hasya','2030')
console.log(book1.getsummary())
console.log(book2.getsummary())