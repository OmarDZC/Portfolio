import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./componentes/menu/menu.component";
import { HeroComponent } from "./componentes/hero/hero.component";
import { AboutComponent } from "./componentes/about/about.component";
import { ExperienceComponent } from "./componentes/experience/experience.component";
import { ProjectsComponent } from "./componentes/projects/projects.component";
import { ConctactComponent } from "./componentes/conctact/conctact.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, HeroComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ConctactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';
}
