import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public HeroNames: string[]= ['Spiderman','Ironman','Hulk','She Hulk','Thor','Capitan America'];
  public deleteHero?: string;

  removeLastHero(): void{
    this.deleteHero = this.HeroNames.pop();

  }

}
