class Book {
 constructor(title,author,years){
 this.title=title;
 this.author=author;
 this.years=years;
 }
 getsummary(){
  return `${this.title} weiten by ${this.author} in ${this .years}`

 }
 getage(){
  const year=new Date().getFullYear()-this.years;
  return`${this.title} is ${year} years older `
 }
 revise(newyear){
  this.years=newyear;
  this.revise=true;
 }
 static newbook(){
  return 'nobel';
 }
}
const book1=new Book('book one','hasya','2000')
// console.log(book1)
// book1.revise('2050')
// console.log(book1.getsummary())
console.log(Book.newbook())