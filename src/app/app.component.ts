import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<div class="m-5">
			<h1>{{title}}</h1>
		</div>
		<app-gifs></app-gifs>
	`,
	styles: []
})
export class AppComponent {
	title = 'Tangular';
}
