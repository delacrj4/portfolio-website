import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly menuOpen = signal(false);
  protected readonly currentPageTitle = signal('Portfolio');

  protected toggleMenu(): void {
    this.menuOpen.set(!this.menuOpen());
  }

  protected onPageActivated(outlet: RouterOutlet): void {
    const title = outlet.activatedRoute.snapshot.title ?? 'Portfolio';
    this.currentPageTitle.set(title);
    this.menuOpen.set(false);
  }


}
