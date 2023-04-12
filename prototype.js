function Book(title,author,years){
this.title=title;
this.author=author;
this.years=years;
}
Book.prototype.getsummary=function(){
  return `${this.title} weiten by ${this.author} in ${this .years}`
}
Book.prototype.getage=function(){
  const year=new Date().getFullYear()-this.years;
  return`${this.title} is ${year} years older `
}
Book.prototype.revise=function(newyear){
this.years=newyear;
this.revise=true;
}
const book1=new Book('book one','hasya','2000')
const book2=new Book('book two','hasya','50')

console.log(book2)
book2.revise("2020")
console.log(book2)