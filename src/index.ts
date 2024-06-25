import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

interface Book {
    id: number;
    title: string;
    author: string;
    year: number;
}

let books: Book[] = [
    { id: 1, title: 'Book 1', author: 'Author 1', year: 2020 },
    { id: 2, title: 'Book 2', author: 'Author 2', year: 2021 }
];
let nextBookId = 3;


app.get('/books', (req: Request, res: Response) => {
    res.json(books);
});

/** TODO: CODE HERE
 1 - Fix installation issues & add execution script
 2 - Fix test issues & add test execution script
 3 - Implement new book creation
 4 - Implement book edition
 5 - Implement book deletion
*/

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

export default app;
