function Book(title,author,years){
  this.title=title;
  this.author=author;
  this.years=years;
  }
  Book.prototype.getsummary=function(){
    return `${this.title} weiten by ${this.author} in ${this .years}`
  }
function magazine(title,author,year,month){
  Book.call(this,title,author,year);
this.month=month;
}
magazine.prototype=Object.create(Book.prototype)
const magazine1=new magazine('first book','hasya','2000','jan')
magazine.prototype.constructor=magazine;
console.log(magazine1)