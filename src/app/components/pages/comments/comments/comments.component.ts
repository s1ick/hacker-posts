import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../../../ui/posts/posts.component';
@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, PostsComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {

}
