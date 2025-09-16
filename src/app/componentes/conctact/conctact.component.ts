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

  descargarCV() {
    // Aquí va la lógica para descargar el CV
    // Por ejemplo:
    const link = document.createElement('a');
    link.href = 'ruta/a/tu/cv.pdf'; // Reemplaza con la ruta real a tu CV
    link.download = 'CV_Omar_Dev.pdf';
    link.target = '_blank';
    link.click();
  }

}
