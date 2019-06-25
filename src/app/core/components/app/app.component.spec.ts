import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {MenuComponent} from '../menu/menu.component';

describe('AppComponent', () => {
    let fixture;
    let component;
    let $component: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent,
                MenuComponent
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        $component = fixture.nativeElement;

    }));

    afterEach(() => {
        $component.remove();
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as title 'facebook'`, () => {
        expect(component.title).toEqual('facebook');
    });
});
