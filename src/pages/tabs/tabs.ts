import { CdListPage } from './../cds/cdList/cdlist';
import { BookListPage } from './../books/booklist/booklist';
import { Component } from "@angular/core";

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {
    cdListPage = CdListPage;
    bookListPage = BookListPage;
}
