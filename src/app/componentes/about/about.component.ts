import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipListbox, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatChipListbox, MatChipsModule, MatIconModule, ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
