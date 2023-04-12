const bookproto={
  getsummary:function(){
    return `${this.title} weiten by ${this.author} in ${this .years}`

  },
  getage:function(){
    const year=new Date().getFullYear()-this.years;
  return`${this.title} is ${year} years older `
  }
}
// const book1 =Object.create(bookproto)
// book1.title="book one";
// book1.author="hasya";
// book1.year='2000';
const book1 =Object.create(bookproto,{
  title:{value: 'book one'},
  author:{value:'hasya'},
  year:{value:'2000'},
})

console.log(book1)
