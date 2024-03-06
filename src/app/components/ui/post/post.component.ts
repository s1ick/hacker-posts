import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})


export class PostComponent {
  @Input() dataPost:any;
  @Input() indexPost!:number;
}
