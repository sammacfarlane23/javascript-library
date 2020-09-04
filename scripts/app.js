const theHobbit = new Book('Meditations', 'Marcus Aurelius', 303, false);
const thePowerOfNow = new Book('The Power of Now: A Guide to Spiritual Enlightenment', 'Eckhart Tolle', 258, true)
const sapiens = new Book('Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', 498, false);

const defaultLibrary = [theHobbit, thePowerOfNow, sapiens];

let myLibrary = getSavedLibrary();

displayBooks();

const newBookForm = document.querySelector('#new-book-form');
newBookForm.addEventListener('submit', addNewBook);

const newBookButton = document.querySelector('#new-book-button');
newBookButton.addEventListener('click', showForm);

const cancelButton = document.querySelector('#cancel-button');
cancelButton.addEventListener('click', hideForm)