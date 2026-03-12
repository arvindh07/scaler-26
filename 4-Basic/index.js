// 1. Convert temperature
const convertTemperature = (number, unit) => {
    if(typeof number !== "number") {
        return "Not a number."
    }
    const upperUnit = unit.toUpperCase();
    if(upperUnit === "C") {
        return ((number * 9) / 5 + 32) + "F";
    } else if (upperUnit === "F") {
        return ((number - 32) * 5 / 9) + "C";
    } else {
        return "Invalid Unit"
    }
}
// console.log(convertTemperature(100, "C"));

// 2. Reverse words
const reverseWords = (sentence) => {
    const wrdsArr = sentence.split(" ");
    const revArr = wrdsArr.reverse();
    return revArr.join(" ");
}
// console.log(reverseWords("hello world"));

// 3. array of students
const students = [
    { name: "Alice", score: 92 },
    { name: "Bob", score: 80 },
    { name: "Charlie", score: 60 },
    { name: "David", score: 85 },
    { name: "Eve", score: 70 },
];

const groupStudents = (students) => {
    let finalObj = {};

    for (const stud of students) {
        if(stud.score >= 90 && stud.score <= 100) {
            if(finalObj["A"]) {
                finalObj["A"] = [
                    ...(finalObj["A"] || {}),
                    stud.name
                ]
            } else {
                finalObj["A"] = [stud.name];
            }
        } else if(stud.score >= 75 && stud.score <= 89) {
            if(finalObj["B"]) {
                finalObj["B"] = [
                    ...(finalObj["B"] || {}),
                    stud.name
                ]
            } else {
                finalObj["B"] = [stud.name];
            }
        } else {
            if(finalObj["C"]) {
                finalObj["C"] = [
                    ...(finalObj["C"] || {}),
                    stud.name
                ]
            } else {
                finalObj["C"] = [stud.name];
            }
        }
    }

    return finalObj;
}
// console.log(groupStudents(students));

// 4. Library
const books = [
    { title: "Book1", author: "Author1", isAvailable: true },
    { title: "Book2", author: "Author2", isAvailable: true },
    { title: "Book3", author: "Author3", isAvailable: true },
    { title: "Book4", author: "Author4", isAvailable: true },
    { title: "Book5", author: "Author3", isAvailable: true },
];
// list all books
const listAllBooks = () => {
    return books;
}
// mark as borrowed
const borrowBook = (title) => {
    const findIdx = books.findIndex((book) => book.title === title);
    if(findIdx === -1) {
        return "Book not available";
    }
    if(!books[findIdx].isAvailable) {
        return "Book is already borrowed";
    } else {
        books[findIdx] = {
            ...books[findIdx],
            isAvailable: false
        }
        return "Book borrowed successfully";
    }
}
// return a book
const returnBook = (title) => {
    const findIdx = books.findIndex((book) => book.title === title);
    if(findIdx === -1) {
        return "Book not available";
    }
    if(books[findIdx].isAvailable) {
        return "Book is already returned";
    } else {
        books[findIdx] = {
            ...books[findIdx],
            isAvailable: true
        }
        return "Book returned successfully";
    }
}
// find books by author
const findBooksByAuthor = (author) => {
    const authorBooks = [];
    for (const book of books) {
        if(book.author === author) authorBooks.push(book);
    }
    return authorBooks;
}
console.log(listAllBooks());
console.log(borrowBook("Book1"));
console.log(borrowBook("Book1"));
console.log(returnBook("Book1"));
console.log(returnBook("Book1"));
console.log(findBooksByAuthor("Author3"));
