import { Component } from '@angular/core';
import { MatButton, MatIconAnchor } from "@angular/material/button";
import { MatIcon } from '@angular/material/icon';
import { ScrollService } from '../../services/scrollRutas';

@Component({
  selector: 'app-hero',
  imports: [MatButton, MatIcon, MatIconAnchor],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  constructor(private scrollService: ScrollService) { }

  //funcion para hacer scroll a proyectos desde servicio scroll
  scrollToProjects(): void {
    this.scrollService.scrollTo('proyectos');
  }

  //funcion para descargar CV
  downloadCV(): void {
    const link = document.createElement('a');
    link.href = 'cv.pdf';
    link.download = 'CV_Omar_Daza.pdf';
    link.click();
  }



}
