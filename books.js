const bookTemplateElem = document.querySelector(".bookTemplate");
// const message = document.querySelector(".message");
const messageTS = document.querySelector(".messageTS");
const messageHBS = document.querySelector(".messageHBS");

const firstName="Skillo";
const dayCount=3;
const bookCount=2;

let message = `Dear ${firstName},

The ${bookCount} books you took out at the library is due in ${dayCount} days.

Please return these books to us in the next ${dayCount} days.

`

messageTS.innerHTML=message;

const template= Handlebars.compile(bookTemplateElem.innerHTML)

messageHBS.innerHTML= template({
	firstName : "Lindani",
	bookCount : 3,
	dayCount : 5,
	books : [
		{ 
			title : "Lord of the Rings.", author : "J.R.R. Tolkien"
		},
		{ 
			title : "Harry Potter and the Sorcerer's Stone.", author : "J.K. Rowling"
		},
		{ 
			title : "Alice's Adventures in Wonderland.", author : "Lewis Carroll"
		}
	] 
});

