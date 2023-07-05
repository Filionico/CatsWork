import {  Input,Component } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent {
//получение данных из родительского компонента
  @Input() cat1: number=0;
  @Input() cat2: number=0;
  @Input() cat3: number=0;
  @Input() cat4: number=0;

  @Input() table1: number=0;
  @Input() table2: number=0;
  @Input() table3: number=0;
  @Input() table4: number=0;

  @Input() catUp1: number=0;
  @Input() catUp2: number=0;
  @Input() catUp3: number=0;
  @Input() catUp4: number=0;

  @Input() tableUp1: number=0;
  @Input() tableUp2: number=0;
  @Input() tableUp3: number=0;
  @Input() tableUp4: number=0;
}
