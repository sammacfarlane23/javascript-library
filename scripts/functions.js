let myLibrary = [];

function Book(title, author, numberOfPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.haveRead = haveRead;
    this.id = uuidv4();
};

const retrieveLibrary = () => {};

const addBookToLibrary = (book) => {
    myLibrary.push(book);
    localStorage.setItem('library', JSON.stringify(myLibrary));
};

const displayBooks = () => {
    const bookshelf = document.querySelector('#bookshelf')
    bookshelf.innerHTML = '';
    myLibrary = JSON.parse(localStorage.getItem('library'));
    console.log(myLibrary);
    myLibrary.forEach((book) => {
        const bookCard = generateBookDOM(book);
        bookshelf.appendChild(bookCard);
    });
};

const showForm = () => {
    newBookButton.style.display = 'none';
    newBookForm.style.display = 'flex';
};

const hideForm = () => {
    newBookForm.style.display = 'none';
    newBookButton.style.display = 'inline';
};

const addNewBook = (e) => {
    const title = e.target.elements.title.value;
    const author = e.target.elements.author.value;
    const numberOfPages = e.target.elements.numberOfPages.value;
    const haveRead = e.target.elements.haveRead.checked;
    e.preventDefault();

    const newBook = new Book(title, author, numberOfPages, haveRead);
    addBookToLibrary(newBook);
    // Next step is to get new book to show up in library
    displayBooks(myLibrary);
    e.target.elements.title.value = '';
    e.target.elements.author.value = '';
    e.target.elements.numberOfPages.value = '';
    e.target.elements.haveRead.checked = false;
}

const generateBookDOM = (book) => {
    const bookCard = document.createElement('div');

    const title = document.createElement('h1');
    title.classList.add('book-card__title');
    title.textContent = book.title;
    bookCard.appendChild(title);

    const author = document.createElement('p');
    author.classList.add('book-card__author');
    author.textContent = book.author;
    bookCard.appendChild(author);

    const numberOfPages = document.createElement('p');
    numberOfPages.classList.add('book-card__number-of-pages');
    numberOfPages.textContent = book.numberOfPages + ' pages';
    bookCard.appendChild(numberOfPages);

    const haveReadSection = document.createElement('div');
    haveReadSection.classList.add('have-read')

    const haveReadCheckbox = document.createElement('input');
    haveReadCheckbox.type = 'checkbox';
    haveReadCheckbox.classList.add('have-read__checkbox');
    haveReadCheckbox.checked = book.haveRead;
    haveReadCheckbox.addEventListener('change', () => {
        book.haveRead = !book.haveRead;
        haveReadCheckbox.checked = book.haveRead;
        haveReadText.textContent = book.haveRead ? 'read' : 'not read';
    });
    haveReadSection.appendChild(haveReadCheckbox);

    const haveReadText = document.createElement('p');
    haveReadText.classList.add('have-read__text');
    haveReadText.textContent = book.haveRead ? 'read' : 'not read';
    haveReadSection.appendChild(haveReadText);

    bookCard.appendChild(haveReadSection);

    const removeButton = document.createElement('button');
    removeButton.classList.add('book-card__remove');
    removeButton.classList.add('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        removeBook(book.id);
    })
    bookCard.appendChild(removeButton);

    bookCard.classList.add('book-card')

    return bookCard;
}

const removeBook = (id) => {
    myLibrary = myLibrary.filter((book) => {
        return id !== book.id;
    });
    displayBooks();
};