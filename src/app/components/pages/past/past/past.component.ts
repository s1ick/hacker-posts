import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../../../ui/posts/posts.component';
@Component({
  selector: 'app-past',
  standalone: true,
  imports: [CommonModule, PostsComponent],
  templateUrl: './past.component.html',
  styleUrl: './past.component.scss'
})
export class PastComponent {

}
