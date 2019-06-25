import {TestBed} from '@angular/core/testing';

import {PostsService} from './posts.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('PostsService', () => {
    let service: PostsService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ]
        });
        httpMock = TestBed.get(HttpTestingController);
        service = TestBed.get(PostsService);
        // console.log('beforeEach()');
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('getPosts', () => {

        it('should contains method "getPosts"', () => {
            expect(service.getPosts).toEqual(jasmine.any(Function));
        });

        it('should male HTTP request', async () => {
            // 1. Zarejestrowac request
            const response = service.getPosts(); // object Promise

            // 2. Stworzyc server HTTP, ktory bedzie zwracal mockowe dane
            const server = httpMock.expectOne('assets/posts.json');

            // 3. Zwracamy dane testowe
            server.flush(['pierwszy', 'drugi']);

            // 4. Pobrac dane z odpowiedzi servera
            const posts = await response;

            // 5. Sprawdzic poprawnosc otrzymanych danych
            expect(posts).toEqual(['pierwszy', 'drugi']);
        });

    });

});
