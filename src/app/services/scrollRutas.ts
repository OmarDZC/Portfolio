import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ScrollService {

    //funcion para scrollear a la ruta marcada del menu por ID
    scrollTo(sectionId: string): void {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}