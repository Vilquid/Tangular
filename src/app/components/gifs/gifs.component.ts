import { Component, OnInit } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { Gif } from '../../models/gif.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-gifs',
	templateUrl: './gifs.component.html',
	styleUrls: []
})
export class GifsComponent implements OnInit {

	gifs: Gif[];

	constructor(private gifService: GifService, private router: Router) { }

	// Méthode qui permet de récupérer les gifs selon l'url de la page à l'initialisation du composant
	ngOnInit() {
		if (this.router.url == '/cat') {
			this.search('cat', 12);
		}
		else if (this.router.url == '/dog') {
			this.search('dog', 12);
		}
		else {
			this.search('nature', 12);
		}
	}

	// Méthode qui permet de lancer la recherche et récupérer les gifs selon le mot clé et le nombre de résultats demandés
	search(searchTerm: string, resultCount: number) {
		this.gifService.getGifs(searchTerm, resultCount).subscribe(gifs => {
			this.gifs = gifs;
		});
	}
}
