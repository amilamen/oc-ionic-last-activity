import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavParams, ViewController } from 'ionic-angular';
import { Book } from './../../../app/models/Book';
import { Borrower } from './../../../app/models/Borrower';
import { DonneesService } from './../../../services/donneesService';

@Component({
    selector: 'page-lendbook',
    templateUrl: 'lendbook.html'
})
export class LendBookPage implements OnInit {

    index: number;
    book: Book;
    borrowForm: FormGroup;
    isLending = false;

    constructor(public navParams: NavParams,
        private viewCtrl: ViewController,
        private donneesService: DonneesService,
        private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.index = this.navParams.get('index');
        this.book = this.donneesService.bookList[this.index];

        this.initForm();
    }

    initForm() {
        this.borrowForm = this.formBuilder.group({
            name: ['', Validators.required]
        });
    }

    onDismissModal() {
        this.viewCtrl.dismiss();
    }

    onToggleLend() {
        if (this.book.isLent) {
            this.donneesService.renderBook(this.book);
            this.onDismissModal();
        } else {
            this.isLending = true;
        }
    }

    onSubmitForm() {
        let newBorrower = new Borrower(this.borrowForm.get('name').value);
        this.donneesService.lendBook(this.book, newBorrower)
        this.onDismissModal();
    }
}
