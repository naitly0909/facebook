import {Component, OnInit} from '@angular/core';
import {PostsService} from '../../../shared/services/posts.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

    allPosts = null;

    constructor(private postService: PostsService) {
    }

    ngOnInit() {
        this.setupPosts();
    }

    async setupPosts() {
        this.allPosts = await this.postService.getPosts();
    }

}
