import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CommentListItemComponent} from './comment-list-item.component';
import {ICommentListItem} from '../../../shared/interfaces/comment-list-item.interface';
import {CommentListComponent} from '../comment-list/comment-list.component';

describe('CommentListItemComponent', () => {
    let component: CommentListItemComponent;
    let $component: any;
    let fixture: ComponentFixture<CommentListItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CommentListItemComponent, CommentListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CommentListItemComponent);
        component = fixture.componentInstance;
        $component = fixture.nativeElement;
        fixture.detectChanges();
    });

    afterEach(() => {
        $component.remove();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display comment details', () => {
        component.comment = {
            body: 'To jest cos'
        } as ICommentListItem;
        fixture.detectChanges();

        const $body = $component.querySelector('.comment-body');
        expect($body.textContent.trim()).toEqual('To jest cos');
    });

});
