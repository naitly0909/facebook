import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CommentListItemComponent} from './comment-list-item.component';

describe('CommentListItemComponent', () => {
    let component: CommentListItemComponent;
    let $component: any;
    let fixture: ComponentFixture<CommentListItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CommentListItemComponent]
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
});
