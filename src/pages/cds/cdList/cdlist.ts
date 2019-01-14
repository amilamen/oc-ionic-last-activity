import { Component, OnInit, OnDestroy } from "@angular/core";
import { ModalController, MenuController } from 'ionic-angular';
import { Subscription } from "rxjs/Subscription";
import { Cd } from './../../../app/models/Cd';
import { DonneesService } from './../../../services/donneesService';
import { LendCdPage } from './../lendcd/lendcd';

@Component({
    selector: 'tab-cdlist',
    templateUrl: 'cdlist.html'
})
export class CdListPage implements OnInit, OnDestroy {

    cds: Cd[];
    cdSubscription: Subscription;

    constructor(private menuCtrl: MenuController,
        private modalCtrl: ModalController,
        private donneesService: DonneesService) {}

    ngOnInit() {
        this.cdSubscription = this.donneesService.cds$.subscribe(
            (cds: Cd[]) => {
                this.cds = cds;
            }
        );
        this.donneesService.fetchCdList();
    }

    ionViewWillEnter() {
        this.cds = this.donneesService.CdList.slice();
    }

    onToggleMenu() {
        this.menuCtrl.open();
    }

    onShowCd(index: number) {
        let modal = this.modalCtrl.create(LendCdPage, { index: index});
        modal.present();
    }

    ngOnDestroy() {
        this.cdSubscription.unsubscribe();
    }
}
