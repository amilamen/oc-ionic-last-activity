import { MenuController, ToastController, LoadingController } from 'ionic-angular';
import { Component } from "@angular/core";
import { DonneesService } from './../../services/donneesService';

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
})

export class SettingsPage {

    constructor(private menuCtrl: MenuController,
        private toastCtrl: ToastController,
        private loadingCtrl: LoadingController,
        private donneesService: DonneesService) {}

    onToggleMenu() {
        this.menuCtrl.open();
    }

    onSaveList() {
        let loaderBook = this.loadingCtrl.create({
            content: 'Sauvegarde des données de livre en ligne en cours...'
        });
        loaderBook.present();
        this.donneesService.saveBooksToFirebase().then(
            () => {
                loaderBook.dismiss();
                this.toastCtrl.create({
                    message: 'Données de livre sauvegardées !',
                    duration: 3000,
                    position: 'bottom'
                }).present();
            },
            (error) => {
                loaderBook.dismiss();
                this.toastCtrl.create({
                    message: error,
                    duration: 3000,
                    position: 'bottom'
                }).present();
            }
        );
        
        let loaderCd = this.loadingCtrl.create({
            content: 'Sauvegarde des données de cd en ligne en cours...'
        });

        this.donneesService.saveCdsToFirebase()
        .then(
            () => {
                loaderCd.dismiss();
                this.toastCtrl.create({
                    message: 'Données de cd sauvegardées !',
                    duration: 3000,
                    position: 'bottom'
                }).present();
            },
            (error) => {
                loaderCd.dismiss();
                this.toastCtrl.create({
                    message: error,
                    duration: 3000,
                    position: 'bottom'
                }).present();
            }
        );
    }

    onFetchList() {
        let loaderBook = this.loadingCtrl.create({
            content: 'Récupération des données de livre en cours...'
        });
        loaderBook.present();
        this.donneesService.retrieveBooksFromFirebase().then(
            () => {
                loaderBook.dismiss();
                this.toastCtrl.create({
                    message: 'Données de livre récupérées avec succès!',
                    duration: 3000,
                    position: 'bottom'
                }).present();
            }, 
            (error) => {
                loaderBook.dismiss();
                this.toastCtrl.create({
                    message: error,
                    duration: 3000,
                    position: 'bottom'
                }).present();
            }
        );

        let loaderCd = this.loadingCtrl.create({
            content: 'Récupération des données de cd en cours...'
        });
        loaderCd.present();
        this.donneesService.retrieveCdsFromFirebase().then(
            () => {
                loaderCd.dismiss();
                this.toastCtrl.create({
                    message: 'Données de cd récupérées avec succès!',
                    duration: 3000,
                    position: 'bottom'
                }).present();
            },
            (error) => {
                loaderCd.dismiss();
                this.toastCtrl.create({
                    message: error,
                    duration: 3000,
                    position: 'bottom'
                }).present();
            }
        );
    }
}