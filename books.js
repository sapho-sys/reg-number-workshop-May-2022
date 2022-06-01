const bookTemplateElem = document.querySelector(".bookTemplate");
// const message = document.querySelector(".message");
const messageTS = document.querySelector(".messageTS");
const messageHBS = document.querySelector(".messageHBS");

let message = `Dear ${firstName},

The ${bookCount} books you took out at the library is due in ${dayCount} days.

Please return these books to us in the next ${dayCount} days.

`

