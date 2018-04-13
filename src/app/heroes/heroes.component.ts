// import important pour Angular
import {Component, Injectable, OnInit} from '@angular/core';
// On import la classe Hero
import {Hero} from '../hero';
// On importe un tableau de classes Hero
import { HeroService } from '../hero.service';

// @Component détermine le component, selecto, templateUrl, styleUrls.
@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

// On export la class HeroesComponent (qui est le contrôleur en quelque sorte)
@Injectable()
export class HeroesComponent implements OnInit {

    // On type la variable hero en object Hero
    // La variable hero n'est plus utilisé dans le template.
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

    heroes: Hero[];

    selectedHero: Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    constructor(private heroService: HeroService) {
    }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes(): void {
        // this.heroes = this.heroService.getHeroes();
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

}
