import { Component } from '@angular/core';

@Component({
	selector: 'app-navbar',
	template: `
		<nav class="navbar navbar-expand-lg bg-dark">
			<div class="container-fluid">
				<a class="navbar-brand text-white" href="https://github.com/Vilquid/Tangular">Tangular</a>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link text-white" routerLink="/home" routerLinkActive="gras" aria-current="page">Accueil</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white" routerLink="/cat" routerLinkActive="gras" aria-current="page">Chat</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white" routerLink="/dog" routerLinkActive="gras" aria-current="page">Chien</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white" routerLink="/about" routerLinkActive="gras" aria-current="page">A propos</a>
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
