import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<app-navbar></app-navbar>
		<div class="m-5">
			<h1>{{title}}</h1>
		</div>
		<router-outlet></router-outlet>
	`,
	styles: []
})
export class AppComponent {
	title = 'Tangular';
}
