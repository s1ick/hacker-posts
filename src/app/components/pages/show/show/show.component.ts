import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../../../ui/posts/posts.component';
@Component({
  selector: 'app-show',
  standalone: true,
  imports: [CommonModule, PostsComponent],
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss'
})
export class ShowComponent {

}
