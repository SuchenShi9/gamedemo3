import { Component } from '@angular/core';
import { MatRadioButton } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-directory',
  standalone: true,
  imports: [MatSlideToggleModule, MatRadioButton],
  templateUrl: './directory.component.html',
  styleUrl: './directory.component.css'
})
export class DirectoryComponent {

}
