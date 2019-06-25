import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {IResponsePosts} from '../interfaces/response/response-posts.interface';
import {IPostList} from '../interfaces/post-list.interface';
import {IPostListItem} from '../interfaces/post-list-item.interface';

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    constructor(private http: HttpClient) {

    }

    async getPosts(): Promise<IPostList> {
        const response = await this.http.get<IResponsePosts>('assets/posts.json').toPromise();
        return response.posts;
    }

    async getPostById(postId: string): Promise<IPostListItem> {
        const posts = await this.getPosts();
        const foundPost = posts.find((post) => {
            return post.id === postId;
        });
        return foundPost;
    }
}
