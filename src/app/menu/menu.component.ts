import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


    constructor() { }

    private items: MenuItem[];

    ngOnInit() {

        this.items = [{
            label: 'File',
            items: [
                { label: 'New', icon: 'fa fa-plus' },
                { label: 'Open', icon: 'fa fa-download' }
            ]
        },
        {
            label: 'Edit',
            items: [
                { label: 'Undo', icon: 'fa fa-refresh' },
                { label: 'Redo', icon: 'fa fa-repeat' }
            ]
        }];
    }

}
