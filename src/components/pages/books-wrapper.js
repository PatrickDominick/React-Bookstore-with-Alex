import React from "react";
import Book from "../book"

export default function booksWrapper(props) {
    const renderBook = book => {
        return (
            <Book
                key = {book.id}
                title = {book.title}
                author = {book.author}
                review = {book.review}
            />
        )
    }

    return (
        <div className="books-wrapper">
            {props.renderedData.map(book => renderBook(book))}
        </div>
    )
}