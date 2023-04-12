// const s='hello'
// console.log(typeof s)
// const s1=new String ('hello')
// console.log(typeof s1)
// console.log(window),alert(1)
// console.log(navigator.appVersion)
const book1={
title:"book one",
author:"ram",
year:'2000',
getsummary:function( ){
return`${this.title} is writen by ${this.author} in ${this.year} `;
}
}
const book2={
  title:"book two",
  author:'hasya',
  year:"2030",
  getsummary:function(){
return `${this.title} is writen by ${this.author} in ${this.year}`
  }

}
// console.log(book1.getsummary())
console.log(Object.values(book1))
console.log(Object.keys(book1))