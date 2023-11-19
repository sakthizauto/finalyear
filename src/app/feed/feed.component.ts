// feed.component.ts
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [style({ opacity: 0 }), animate(300)]),
      transition('* => void', animate(300, style({ opacity: 0 }))),
    ]),
  ],
})
export class FeedComponent {
  userProfile: any = {
    username: 'sakthi',
    picture: 'assets/man-avatar-.avif', // Use Angular's asset path
  };

  posts: any[] = [];
  newPost: any = {};

  submitPost() {
    // Add the new post to the posts array along with user profile
    this.posts.push({
      ...this.newPost,
      userProfile: { username: this.userProfile.username, picture: this.userProfile.picture },
      liked: false,
      showAnimation: true,
    });

    // Clear the new post object for the next post
    this.newPost = {};

  }
  likePost(post: any) {
    // Implement your logic for liking a post
    console.log(`Liked post with text: ${post.text}`);
    post.liked = true;
  }

  commentOnPost(post: any) {
    // Implement your logic for commenting on a post
    console.log(`Commented on post with text: ${post.text}`);
  }
}
