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
		this.gifService.getGifs('cat', 10).subscribe(gifs => {
			this.gifs = gifs;
			console.table(this.gifs);
		});
	}
}
