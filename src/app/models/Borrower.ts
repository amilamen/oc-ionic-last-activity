export class Borrower {
    borrowDate: Date;
    returnDate?: Date;
    isOn: boolean;

    constructor(public name: string) {
        this.isOn = true;
        this.borrowDate = new Date()
    }
}