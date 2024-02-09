import { Component } from '@angular/core';

interface Post {
  id: number;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: Comment[];
}

interface Comment {
  id: number;
  content: string;
  userId: number;
}

interface Friend {
  id: number;
  name: string;
}

interface Follower {
  id: number;
  name: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = {
    id: 1,
    name: 'John Doe',
    profilePictureUrl: 'assets/profile-picture.jpg',
    posts: [
      { id: 1, content: 'This is my first post!', likes: 5, comments: [] },
      { id: 2, content: 'Feeling happy today!', imageUrl: 'assets/happy.jpg', likes: 10, comments: [] },
      { id: 3, content: 'Hello world!', likes: 15, comments: [] }
    ],
    friends: [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' }
    ],
    followers: [
      { id: 1, name: 'David' },
      { id: 2, name: 'Emma' },
      { id: 3, name: 'Frank' }
    ]
  };

  // Method to handle liking a post
  likePost(post: Post) {
    post.likes++;
  }

  // Method to handle adding a comment to a post
  addComment(post: Post, commentContent: string) {
    const newComment: Comment = {
      id: post.comments.length + 1,
      content: commentContent,
      userId: this.user.id // Assuming the current user ID is used for comments
    };
    post.comments.push(newComment);
  }

  // Method to handle adding a friend
  addFriend(friendName: string) {
    const newFriend: Friend = {
      id: this.user.friends.length + 1,
      name: friendName
    };
    this.user.friends.push(newFriend);
  }

  // Method to handle removing a friend
  removeFriend(friend: Friend) {
    const index = this.user.friends.indexOf(friend);
    if (index !== -1) {
      this.user.friends.splice(index, 1);
    }
  }

  // Method to toggle displaying followers list
  showFollowers = false;
  toggleFollowersList() {
    this.showFollowers = !this.showFollowers;
  }
}
