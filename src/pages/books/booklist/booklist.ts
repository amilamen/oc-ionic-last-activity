import { Component, OnInit, OnDestroy } from "@angular/core";
import { MenuController, ModalController } from "ionic-angular";
import { Subscription } from "rxjs/Subscription";
import { Book } from './../../../app/models/Book';
import { DonneesService } from './../../../services/donneesService';
import { LendBookPage } from '../lendbook/lendbook';

@Component({
    selector: 'tab-booklist',
    templateUrl: 'booklist.html'
})
export class BookListPage implements OnInit, OnDestroy {
    
    books: Book[];
    bookSubscription: Subscription;

    constructor(private menuCtrl: MenuController,
        private modalCtrl: ModalController,
        private donneesService: DonneesService) {
    }

    ngOnInit() {
        this.bookSubscription = this.donneesService.books$.subscribe(
            (books: Book[]) => {
                this.books = books;
            }
        );
        this.donneesService.fetchBookList();
    }

    ionViewWillEnter() {
        this.books = this.donneesService.bookList.slice();
    }

    onToggleMenu() {
        this.menuCtrl.open();
    }

    onShowBook(index: number) {
        let modal = this.modalCtrl.create(LendBookPage, { index: index});
        modal.present();
    }

    ngOnDestroy() {
        this.bookSubscription.unsubscribe();
    }
}