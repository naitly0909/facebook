import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NotFoundComponent} from './not-found.component';

describe('NotFoundComponent', () => {
    let component: NotFoundComponent;
    let fixture: ComponentFixture<NotFoundComponent>;
    let $component: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NotFoundComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NotFoundComponent);
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
