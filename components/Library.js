import React, { useEffect, useState } from 'react';
import styles from '../styles/Library.module.css';

function Library() {
    const [books, setBooks] = useState([]);

    const fetchBooks = (userID, apiKey, bookshelfID, startIndex = 0, accumulatedBooks = []) => {
        const maxResults = 40;
        const url = `https://www.googleapis.com/books/v1/users/${userID}/bookshelves/${bookshelfID}/volumes?startIndex=${startIndex}&maxResults=${maxResults}&key=${apiKey}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const newBooks = data.items ? data.items.map(book => ({
                    title: book.volumeInfo.title,
                    author: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author',
                    imageUrl: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail.replace('&zoom=1', '&zoom=0') : '',
                    infoLink: book.volumeInfo.infoLink // Add the infoLink to the book object
                })) : [];

                const allBooks = [...accumulatedBooks, ...newBooks];

                if (data.totalItems > allBooks.length) {
                    fetchBooks(userID, apiKey, bookshelfID, allBooks.length, allBooks);
                } else {
                    setBooks(allBooks);
                }
            })
            .catch(error => {
                console.error(`Could not get books from the shelf: ${error}`);
            });
    };

    useEffect(() => {
        const userID = '115666906705927103769';
        const apiKey = 'AIzaSyCuyma4QkQxpN6Oy8vxVbtFGmWUatmSUzE';
        const bookshelfID = '4';

        fetchBooks(userID, apiKey, bookshelfID);
    }, []);

    return (
        <div className={styles.bookContainer}>
            {books.map((book, index) => (
                <a href={book.infoLink} target="_blank" rel="noopener noreferrer" key={index} className={styles.bookTile}>
                    {/* {book.imageUrl && <img src={book.imageUrl} alt={book.title} className={styles.bookImage} />} */}
                    <div className={styles.bookTitle}>{book.title}</div>
                    <div className={styles.authorName}>{book.author}</div>
                </a>
            ))}
        </div>
    );
}

export default Library;
