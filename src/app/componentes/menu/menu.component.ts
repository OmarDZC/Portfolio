import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { ScrollService } from '../../services/scrollRutas';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private scrollService: ScrollService) {} //importar servicio para usar funcion

  isScrolled = false;

  //escucha el evento de scroll
  @HostListener('window:scroll')
  onWindowScroll() {
    //obtiene posición actual del scroll
    //pageYOffset => cantidad de píxeles que se ha desplazado
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > 50) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  //funcion para scrollear a la ruta marcada del menu por ID (desde servcios)
  scrollToSection(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
  }



}
