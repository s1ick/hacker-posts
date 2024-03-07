import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { routes } from '../../../app.routes';
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class PostComponent {
  constructor(private router: Router) {}
  @Input() dataPost:any;
  @Input() indexPost!:number;
  navigate(e: Event, id: number) {
    this.router.navigateByUrl("/news/comments/"+id)
  }
}
