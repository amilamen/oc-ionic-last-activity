import { Storage } from '@ionic/storage';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import { Book } from './../app/models/Book';
import { Cd } from './../app/models/Cd';
import { Borrower } from './../app/models/Borrower';
import { Injectable } from '@angular/core';

@Injectable()
export class DonneesService {

    books$ = new Subject<Book[]>();
    cds$ = new Subject<Cd[]>();

    constructor(private storage: Storage) {}

    bookList: Book[] = [
        { 
            title: 'Les Trois Mousquetaires',
            author: 'Alexandre Dumas',
            description: [
                'synopsis: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.'
            ],
            isLent: false
        },
        { 
            title: 'Le Comte de Monte-Cristo',
            author: 'Alexandre Dumas',
            description: [
                'synopsis: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.'
            ],
            isLent: false
        },{ 
            title: 'La Reine Margot',
            author: 'Alexandre Dumas',
            description: [
                'synopsis: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.'
            ],
            isLent: false
        },{ 
            title: 'La dame de Monsoreau',
            author: 'Alexandre Dumas',
            description: [
                'synopsis: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.'
            ],
            isLent: false
        },
        { 
            title: 'Voyage au centre de la Terre',
            author: 'Jules Verne',
            description: [
                'synopsis: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.'
            ],
            isLent: false
        },
        { 
            title: 'De la Terre à la Lune',
            author: 'Jules Verne',
            description: [
                'synopsis: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.'
            ],
            isLent: false
        },
        { 
            title: 'Vingt mille lieues sous les mers',
            author: 'Jules Verne',
            description: [
                'synopsis: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.'
            ],
            isLent: false
        },
        { 
            title: 'Le Tour du monde en quatre-vingts jours',
            author: 'Jules Verne',
            description: [
                'synopsis: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.'
            ],
            isLent: false
        }
    ];

    CdList: Cd[] = [
        { 
            title: 'The College Dropout',
            artist: 'Kanye West',
            description: [
                'genre: rap',
                'auteur: Kanye West',
                'compositeur: Kanye West'
            ],
            isLent: false
        },
        { 
            title: 'Late Registration',
            artist: 'Kanye West',
            description: [
                'genre: rap',
                'auteur: Kanye West',
                'compositeur: Kanye West'
            ],
            isLent: false
        },
        { 
            title: 'Graduation',
            artist: 'Kanye West',
            description: [
                'genre: rap',
                'auteur: Kanye West',
                'compositeur: Kanye West'
            ],
            isLent: false
        },
        { 
            title: 'My Beautiful Dark Twisted Fantasy',
            artist: 'Kanye West',
            description: [
                'genre: rap',
                'auteur: Kanye West',
                'compositeur: Kanye West'
            ],
            isLent: false
        },
        { 
            title: 'Viva la Vida or Death and All His Friends',
            artist: 'Coldplay',
            description: [
                'genre: pop alternative',
                'auteur: Chris Martin',
                'compositeur: Chris Martin'
            ],
            isLent: false
        },
        { 
            title: 'Mylo Xyloto',
            artist: 'Coldplay',
            description: [
                'genre: rap',
                'auteur: Chris Martin',
                'compositeur: Chris Martin'
            ],
            isLent: false
        }
    ];

    emitBooks() {
        this.books$.next(this.bookList.slice());
    }

    emitCds() {
        this.cds$.next(this.CdList.slice());
    }

    lendBook(book: Book, borrower: Borrower) {
        book.borrower = borrower;
        book.isLent = true
        this.saveBooksToLocalStorage();
        this.emitBooks();
    }

    renderBook(book: Book) {
        book.borrower = null;
        book.isLent = false;
        this.saveBooksToLocalStorage();
        this.emitBooks();
    }

    lendCd(cd: Cd, borrower: Borrower) {
        cd.borrower = borrower;
        cd.isLent = true;
        this.saveCdsToLocalStorage();
        this.emitCds();
    }

    renderCd(cd: Cd) {
        cd.borrower = null;
        cd.isLent = false;
        this.saveCdsToLocalStorage();
        this.emitCds();
    }

    saveBooksToLocalStorage() {
        this.storage.set('books', this.bookList);
    }

    saveCdsToLocalStorage() {
        this.storage.set('cds', this.CdList);
    }

    fetchBookList() {
        this.storage.get('books').then(
            (list) => {
                if (list && list.length) {
                    this.bookList = list.slice();
                }
                this.emitBooks();
            }
        );
    }

    fetchCdList() {
        this.storage.get('cds').then(
            (list) => {
                if (list && list.length) {
                    this.CdList = list.slice();
                }
                this.emitCds();
            }
        );
    }

    saveBooksToFirebase() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('books').set(this.bookList).then(
                (data: DataSnapshot) => {
                    resolve(data);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    saveCdsToFirebase() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('cds').set(this.CdList).then(
                (data: DataSnapshot) => {
                    resolve(data);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    retrieveBooksFromFirebase() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('books').once('value').then(
                (data: DataSnapshot) => {
                    this.bookList = data.val();
                    this.saveBooksToLocalStorage();
                    this.emitBooks();
                    resolve('Données des Livres récupérées avec succès!');
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    retrieveCdsFromFirebase() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('cds').once('value').then(
                (data: DataSnapshot) => {
                    this.CdList = data.val();
                    this.emitCds();
                    resolve('Données des Cd récupérées avec succès!')
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }
}