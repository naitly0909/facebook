import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


    allPosts = [
        {
            id: 'IdPsa',
            body: 'Mama fajnego psa!',
            author: {
                name: 'Ciocia Krysia'
            },
            images: [
                'https://picsum.photos/200/50'
            ]
        },
        {
            id: 'IdKota',
            body: 'Mama fajnego kota!',
            author: {
                name: 'Wojek Zbyszek'
            },
            images: [
                'https://picsum.photos/200/50'
            ]
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
