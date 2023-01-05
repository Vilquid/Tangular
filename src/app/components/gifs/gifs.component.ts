import { Component, OnInit } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { Gif } from '../../models/gif.model';

@Component({
	selector: 'app-gifs',
	templateUrl: './gifs.component.html',
	styleUrls: []
})
export class GifsComponent implements OnInit {

	gifs: Gif[];

	constructor(private gifService: GifService) { }

	ngOnInit() {
		this.search('cat', 12);
	}

	// Méthode qui permet de lancer la recherche et récupérer les gifs selon le mot clé et le nombre de résultats demandés
	search(searchTerm: string, resultCount: number) {
		this.gifService.getGifs(searchTerm, resultCount).subscribe(gifs => {
			this.gifs = gifs;
		});
	}
}
