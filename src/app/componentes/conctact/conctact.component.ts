import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipListbox, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-conctact',
  imports: [MatCardModule, MatChipListbox, MatChipsModule, MatIconModule,],
  templateUrl: './conctact.component.html',
  styleUrl: './conctact.component.css'
})
export class ConctactComponent {

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = 'cv.pdf';
    link.download = 'CV_Omar_Daza.pdf';
    link.click();
  }

}
