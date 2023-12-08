import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input() imageUrl: string | null = null;

  imgContext = { $implicit: 'top', bottom: 'bottom' };

  constructor() { }

}
