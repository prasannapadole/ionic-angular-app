import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text: string = 'Default starting text.'

  changeText() {
    this.text = 'Changed!'
  }
}
