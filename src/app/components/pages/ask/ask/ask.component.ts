import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../../../ui/posts/posts.component';
@Component({
  selector: 'app-ask',
  standalone: true,
  imports: [CommonModule, PostsComponent],
  templateUrl: './ask.component.html',
  styleUrl: './ask.component.scss'
})
export class AskComponent {

}
