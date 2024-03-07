import { Component, ViewEncapsulation } from '@angular/core';
import { LoaderService } from '../../../loader.service';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-spinner',
  standalone: true,
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [MatProgressSpinnerModule],
})
export class SpinnerComponent {
  constructor(public loader: LoaderService) { }
}