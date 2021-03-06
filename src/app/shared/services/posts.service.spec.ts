import {TestBed} from '@angular/core/testing';

import {PostsService} from './posts.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {IPostList} from '../interfaces/post-list.interface';
import {IPostListItem} from '../interfaces/post-list-item.interface';
import {environment} from '../../../environments/environment';

describe('PostsService', () => {
    let service: PostsService;
    let httpMock: HttpTestingController;
    const url = environment.postsUrl;

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

        it('should contains method "fetchPosts"', () => {
            expect(service.fetchPosts).toEqual(jasmine.any(Function));
        });

        it('should male HTTP request', async () => {
            // 1. Zarejestrowac request
            const response = service.fetchPosts(); // object Promise

            // 2. Stworzyc server HTTP, ktory bedzie zwracal mockowe dane
            const server = httpMock.expectOne(url);


            const fakePostList = [
                {id: 'aldfjs'},
                {id: 'fweopwe'}
            ] as IPostList;

            // 3. Zwracamy dane testowe
            server.flush({
                posts: fakePostList
            });

            // 4. Pobrac dane z odpowiedzi servera
            const posts = await response;

            // 5. Sprawdzic poprawnosc otrzymanych danych
            expect(posts).toEqual(fakePostList);
        });

    });

    describe('getPostById', () => {

        it('should contains method "getPostById"', () => {
            expect(service.getPostById).toEqual(jasmine.any(Function));
        });

        it('should male HTTP request', async () => {

            const postId = 'aaaaaaaaaaaaa';

            // 1. Zarejestrowac request
            const response = service.getPostById(postId); // object Promise

            // 2. Stworzyc server HTTP, ktory bedzie zwracal mockowe dane
            const server = httpMock.expectOne(url);

            const fakePost = {id: 'aaaaaaaaaaaaa'} as IPostListItem;
            const fakePostList = [fakePost, {id: 'bbbbbbbbb'}] as IPostList;

            // 3. Zwracamy dane testowe
            server.flush({
                posts: fakePostList
            });

            // 4. Pobrac dane z odpowiedzi servera
            const posts = await response;

            // 5. Sprawdzic poprawnosc otrzymanych danych
            expect(posts).toEqual(fakePost);
        });

    });

});
