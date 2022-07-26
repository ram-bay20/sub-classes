class Book {
     constructor(title,publisher,year){
          this.title = title;
          this.publisher = publisher;
          this.year = year;
     }

     summary(){
          return `${this.title} was published by ${this.publisher} in ${this.month} ${this.year}.`;
     }

     age(){
          const old = new Date().getFullYear()-this.year;
          return `The comic ${this.title} is ${old} years old.`;
     }

     change(newYear){
          this.year = newYear;
          this.revised = true;
     }
}

class ComicBook extends Book{
     constructor(title,publisher,year,month){
          super(title,publisher,year);
          this.month = month;
     }
}

const comic = new ComicBook('The Infinity Saga','Stan Lee','1976','july');

console.log(comic.summary());
console.log(comic.age());
comic.change(1972);
console.log(comic.summary());
console.log(comic.age());
