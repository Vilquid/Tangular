import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: []
})
export class SearchComponent {

	@Output() onSearch = new EventEmitter<string>();
	searchTerm: string = "";

	// Méthode appelée lors de l'appui sur la touche entrée ou clic sur le bouton de recherche
	startSearch() {
		//if (this.searchTerm.length > 0) {
		console.log(this.searchTerm)
		this.onSearch.emit(this.searchTerm)
		this.searchTerm = "";
		//}
	}

	// Méthode appelée lors de l'appui sur la touche Echap
	resetInput() {
		this.searchTerm = "";
		console.log("youpi");
	}
}
