import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipListbox, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-experience',
  imports: [MatCardModule, MatChipListbox, MatChipsModule, MatIconModule, MatListModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

}
