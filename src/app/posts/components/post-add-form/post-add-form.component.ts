import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import uuid from 'uuid';

@Component({
    selector: 'app-post-add-form',
    templateUrl: './post-add-form.component.html',
    styleUrls: ['./post-add-form.component.scss']
})
export class PostAddFormComponent implements OnInit {

    @Output() addPost = new EventEmitter();

    addPostForm = new FormGroup({
        body: new FormControl('')
    });

    constructor() {
    }

    get body() {
        return this.addPostForm.get('body');
    }

    ngOnInit() {
    }

    onSubmit() {
        const fields = this.addPostForm.getRawValue();
        fields.id = uuid();
        fields.author = {
            id: uuid(),
            name: 'Lolek',
            avatar_url: 'http://placeskull.com/50/50/7E2217'
        };
        fields.created_time = new Date().toUTCString();
        fields.images = [
            'https://placekitten.com/408/287'
        ];
        console.log('onSubmit()', fields);
        this.addPost.next(Object.assign({}, fields));
    }

}
