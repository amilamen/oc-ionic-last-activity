import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NavParams, ViewController } from 'ionic-angular';
import { Cd } from './../../../app/models/Cd';
import { Borrower } from './../../../app/models/Borrower';
import { DonneesService } from './../../../services/donneesService';


@Component({
    selector: 'page-lendcd',
    templateUrl: 'lendcd.html'
})
export class LendCdPage implements OnInit {
    index: number;
    cd: Cd;
    borrowForm: FormGroup;
    isLending = false;

    constructor(public navParams: NavParams,
        private viewCtrl: ViewController,
        private donneesService: DonneesService,
        private formBuilder: FormBuilder) {}
    
    ngOnInit() {
        this.index = this.navParams.get('index');
        this.cd = this.donneesService.CdList[this.index];

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
        if (this.cd.isLent) {
            this.donneesService.renderCd(this.cd);
            this.onDismissModal();
        } else {
            this.isLending = true;
        }
    }

    onSubmitForm() {
        let newBorrower = new Borrower(this.borrowForm.get('name').value);
        this.donneesService.lendCd(this.cd, newBorrower);
        this.onDismissModal();
    }
}