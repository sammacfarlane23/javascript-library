let formShowing = false;
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkein', 295, false);
const thePowerOfNow = new Book('The Power of Now: A Guide to Spiritual Enlightenment', 'Eckhart Tolle', 258, true)
const sapiens = new Book('Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', 498, false);

addBookToLibrary(theHobbit);
addBookToLibrary(thePowerOfNow);
addBookToLibrary(sapiens);

displayBooks();

const newBookForm = document.querySelector('#new-book-form');
newBookForm.addEventListener('submit', addNewBook);

const newBookButton = document.querySelector('#new-book-button');
newBookButton.addEventListener('click', showForm);

const cancelButton = document.querySelector('#cancel-button');
cancelButton.addEventListener('click', hideForm)