import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: []
})
export class SearchComponent {

	@Output() onSearch = new EventEmitter<string>();
	searchTerm: string = "";
	lastSearch: string = "";

	// Méthode appelée lors de l'appui sur la touche Entrée ou clic sur le bouton de recherche
	startSearch() {
		if (this.searchTerm.length > 0) {
			console.log("Recherche de : " + this.searchTerm);
			this.onSearch.emit(this.searchTerm);
			this.lastSearch = this.searchTerm;
			this.searchTerm = "";
		}
	}

	// Méthode appelée lors de l'appui sur la touche Echap
	resetInput() {
		this.searchTerm = "";
	}
}
