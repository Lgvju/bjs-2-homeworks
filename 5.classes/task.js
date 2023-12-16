class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }

    fix() {
        return this.state = this.state * 1.5;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, state, author) {
        super(name, releaseDate, pagesCount, state);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, state, author) {
        super(name, releaseDate, pagesCount, state);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, state, author) {
        super(name, releaseDate, pagesCount, state);
        this.type = "detective";
    }
}

// Задача 2

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    /*findBookBy(type, value) {  //Первый вариант поиска findBookBy
         for (let book of this.books) {
             if (
                 (type === "author" && book.author === value) ||
                 (type === "name" && book.name === value) ||
                 (type === "releaseDate" && book.releaseDate === value) ||
                 (type === "pagesCount" && book.pagesCount === value) ||
                 (type === "state" && book.state === value) ||
                 (type === "type" && book.type === value)
             ) {
                 return book;
             }
         }
         return null;
     }*/
    findBookBy(type, value) { //Второй вариант поиска findBookBy
        return this.books.find(book => book[type] === value) || null;
  }
    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                let book = this.books[i];
                this.books.splice(i, 1);
                return book;
            }
        }
        return null;
    }
}

// Задача 3

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }
  addMark(mark, subject) {
      if (this.marks?.[subject] === undefined && mark >= 2 && mark <= 5) {
      this.marks[subject] = [];
      this.marks[subject].push(mark);
    } else if (this.marks.hasOwnProperty(subject) && mark >= 2 && mark <= 5) {
      this.marks[subject].push(mark);
    }
  }
  getAverageBySubject(subject) {
    if (this.marks.hasOwnProperty(subject) === false) {
      return 0;
    }
    const gradePointAverage = this.marks[subject].reduce((acc, mark, index, arr) => {
      acc += mark;
      if (index === arr.length - 1) {
        return acc / arr.length;
      }
      return acc;
    }, 0);
    return gradePointAverage;
  }
  getAverage() {
    if (Object.keys(this.marks).length === 0) {
      return 0;
    }
    let allSubject = Object.keys(this.marks);
    for (let subject of allSubject) {
      allSubject[allSubject.indexOf(subject)] = this.getAverageBySubject(subject);
    }
    const gradePointAverage = allSubject.reduce((acc, mark, index, arr) => {
      acc += mark;
      if (index === arr.length - 1) {
          return acc / arr.length;
      }
      return acc;
      }, 0);
      return gradePointAverage;
  }
}

