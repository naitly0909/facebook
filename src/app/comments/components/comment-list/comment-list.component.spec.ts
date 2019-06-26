import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CommentListComponent} from './comment-list.component';

describe('CommentListComponent', () => {
    let component: CommentListComponent;
    let $component: any;
    let fixture: ComponentFixture<CommentListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CommentListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CommentListComponent);
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
