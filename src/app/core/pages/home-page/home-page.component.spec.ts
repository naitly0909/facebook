import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomePageComponent} from './home-page.component';
import {PostsModule} from '../../../posts/posts.module';
import {SharedModule} from '../../../shared/shared.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('HomePageComponent', () => {
    let component: HomePageComponent;
    let fixture: ComponentFixture<HomePageComponent>;
    let $component: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomePageComponent],
            imports: [
                PostsModule,
                SharedModule,
                HttpClientTestingModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomePageComponent);
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
