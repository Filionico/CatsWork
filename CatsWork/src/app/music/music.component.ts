import { Component } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent {

  result:number=1;
//открытие\закрытие музыки
  public getOperation() {
    this.result=0;

}

public getOperation1() {
 this.result=1;

}
}
