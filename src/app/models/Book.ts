import { Borrower } from './Borrower';
export class Book {

    author: string;
    description: string[];
    isLent: boolean;
    borrower?: Borrower;

    constructor(public title: string){
        this.isLent = false;
    }
}