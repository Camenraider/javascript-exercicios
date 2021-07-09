/** Classes JavaScript **/

//----------------------- criando uma classe --------------------------
class Book {
    

    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read() {
        retun `Estou lendo ${this.title}`;
    }

}
//------------------------ herança -------------------------------------
class ITbook extends Book {
    constructor(title, author, pages, technology){
        super(title, author, pages)
        this.title = technology;
    }
}

let itBook = new ITbook('Algoritimos para viver', 'Brian', 500, 'Algoritimos');

console.log(itBook);

/*
let book = new Book('Clean Code','Martin, Robert C', 431);
let otherBook = new Book('Um Exu em Nova York', 'Cidinha da Silva', 100);

console.log(book, otherBook);
console.log(book.read());
*/

//----------------------------encapsulamento-------------------------------
class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

let person = new Person('João');
person.name = 'Jão';
console.log(person.name);