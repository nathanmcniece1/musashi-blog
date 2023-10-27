import styles from '../styles/Library.module.css';

function Library(){

    const books = [
        { title: "WAKING UP", author: "By Sam Harris" },
        { title: "THE MORAL LANDSCAPE", author: "By Sam Harris" },
        { title: "THE PROBLEMS OF PHILOSOPHY", author: "By Bertrand Russell" },
        { title: "WAKING UP", author: "By Sam Harris" },
        { title: "THE MORAL LANDSCAPE", author: "By Sam Harris" },
        { title: "THE PROBLEMS OF PHILOSOPHY", author: "By Bertrand Russell" },
        { title: "WAKING UP", author: "By Sam Harris" },
        { title: "THE MORAL LANDSCAPE", author: "By Sam Harris" },
        { title: "THE PROBLEMS OF PHILOSOPHY", author: "By Bertrand Russell" },
        { title: "WAKING UP", author: "By Sam Harris" },
        { title: "THE MORAL LANDSCAPE", author: "By Sam Harris" },
        { title: "THE PROBLEMS OF PHILOSOPHY", author: "By Bertrand Russell" },
        
    ];


    return (
        <div className={styles.bookContainer}>
            {books.map((book, index) => (
                <div key={index} className={styles.bookTile}>
                    <div className={styles.bookTitle}>{book.title}</div>
                    <div className={styles.authorName}>{book.author}</div>
                </div>
            ))}
        </div>
    )
}

export default Library;