import { Component, OnChanges, Input } from '@angular/core';
@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() // Faz com que rating vire um atributo de uma tag no html
    rating: number = 0;

    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5; // serve para alterar a quantidade de estrelas exibidas
    }
}