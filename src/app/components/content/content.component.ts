import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../ui/posts/posts.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, RouterModule, PostsComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
