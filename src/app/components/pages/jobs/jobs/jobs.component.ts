import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../../../ui/posts/posts.component';
@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, PostsComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {

}
