import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent {
  icons: string[] = [];

  constructor() { }

  onClick() {
    const icons = ['fa-heart', 'fa-star', 'fa-smile', 'fa-thumbs-up', 'fa-address-book', 'fa-address-card', 'fa-adjust', 'fa-air-freshener', 'fa-align-center'];
    const randomIndex = Math.floor(Math.random() * icons.length);
    const randomIcon = icons[randomIndex];

    this.icons.push(randomIcon);

    setTimeout(() => {
      this.removeOldestIcon();
    }, 3000);
  }

  removeOldestIcon() {
    if (this.icons.length > 0) {
      this.icons.shift();
    }
  }
}
