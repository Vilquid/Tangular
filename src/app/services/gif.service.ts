import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Gif } from '../models/gif.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class GifService {

	baseUrl: string = 'https://tenor.googleapis.com/v2';

	constructor(private http: HttpClient) { }

	// Méthode qui permet de récupérer les gifs 
	getGifs(searchTerm: string, resultCount: number): Observable<Gif[]> {

		const params = new HttpParams()
			.set('q', searchTerm)
			.set('limit', resultCount.toString())
			.set('key', environment.apiKey);

		return this.http.get(this.baseUrl + '/search', { params }).pipe(
			map((response: any) => {
				return response.results.map((gif: Gif) => this.gifAdapter(gif))
			})
		);
	}

	// Méthode qui permet de stocker uniquement les données dont on a besoin
	private gifAdapter(infosGif: any) {
		return {
			description: infosGif.content_description,
			tags: infosGif.tags,
			media: {
				url: infosGif.media_formats.mediumgif.url,
				dims: infosGif.media_formats.mediumgif.dims,
				size: infosGif.media_formats.mediumgif.size
			},
			urlTenor: infosGif.itemurl
		}
	}
}
