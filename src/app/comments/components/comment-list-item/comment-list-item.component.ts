import {Component, Input, OnInit} from '@angular/core';
import {ICommentListItem} from '../../../shared/interfaces/comment-list-item.interface';

@Component({
    selector: 'app-comment-list-item',
    templateUrl: './comment-list-item.component.html',
    styleUrls: ['./comment-list-item.component.scss']
})
export class CommentListItemComponent implements OnInit {

    @Input() comment: ICommentListItem = null;

    constructor() {
    }

    ngOnInit() {
    }

    getCommentAuthorAvatarUrl() {
        return 'http://placeskull.com/50/50/4CC417';
    }

}
