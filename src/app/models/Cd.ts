import { Borrower } from './Borrower';
export class Cd {

    artist: string;
    description: string[];
    isLent: boolean;
    borrower?: Borrower;

    constructor(public title) {
        this.isLent = false;
    }
}