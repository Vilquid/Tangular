import { Component } from '@angular/core';

@Component({
	selector: 'app-navbar',
	template: `
		<nav class="navbar navbar-expand-lg bg-dark">
			<div class="container-fluid">
				<a class="navbar-brand text-white" href="#">
					<svg width="30%" height="30%" viewBox="0 0 512 139" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="#B52E31"><path d="M150.6 102.8v-63h8.1l38.5 50.7V39.8h7.7v63h-8.1l-38.5-51.2v51.2h-7.7zM267.6 100.3c-5.1 1.9-10.6 2.9-16.4 2.9-22.8 0-34.2-10.9-34.2-32.8 0-20.7 11-31.1 33-31.1 6.3 0 12.2.9 17.6 2.6v7c-5.4-2.1-11-3.1-16.7-3.1-17.2 0-25.8 8.2-25.8 24.4 0 17.5 8.5 26.2 25.4 26.2 2.7 0 5.7-.4 9-1.1V74.2h8.1v26.1zM280.6 78.5V39.8h8.1v38.7c0 12.1 6 18.2 18.1 18.2 12 0 18.1-6.1 18.1-18.2V39.8h8.1v38.7c0 16.5-8.7 24.8-26.2 24.8s-26.2-8.3-26.2-24.8zM355.6 39.8v56.4h33v6.6h-41.1v-63h8.1zM400.3 102.8h-8.5l31.3-71.3 31.3 71.3h-9L437.3 83h-20.8l2.2-6.6h15.9l-11.8-28.5-22.5 54.9zM463.1 102.8v-63H490c12 0 18 5 18 15.1 0 8.2-5.9 14.3-17.6 18.2l21.6 29.7h-10.7l-20-28.3v-5.3c12-1.9 18.1-6.5 18.1-13.9 0-5.8-3.3-8.7-10-8.7h-18v56.2h-8.3z"/></g><path d="M0 23L64.5 0l66.2 22.6-10.7 85.3-55.5 30.7-54.6-30.3L0 23z" fill="#E23237"/><path d="M130.7 22.6L64.5 0v138.6l55.5-30.7 10.7-85.3z" fill="#B52E31"/><path d="M64.6 16.2l-40.2 89.4 15-.3 8.1-20.2H83.4l8.8 20.4 14.3.3-41.9-89.6zm.1 28.7l13.6 28.4H52.8l11.9-28.4z" fill="#FFF"/></g></svg>
				</a>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link text-white" aria-current="page" href="#">Home</a>
						</li>
						<li class="nav-item text-white">
							<a class="nav-link text-white" href="#">About</a>
						</li>
					</ul>
					<form class="d-flex" role="search">
						<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
						<button class="btn btn-outline-success" type="submit">Search</button>
					</form>
				</div>
			</div>
		</nav>
	`,
	styles: [
	]
})
export class NavbarComponent {

}
