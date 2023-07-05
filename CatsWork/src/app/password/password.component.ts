import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
//понимаю , что это можно было оптимизировать по массивам и объектам 
// отвечает за открытие\закрытие магазина
  result:number=1;
//отвечает за появление эффектов
  upEffect:number=0;
//появление котов
  cats1:number=0;
  cats2:number=0;
  cats3:number=0;
  cats4:number=0;
//появление столов
  tablle1:number=0;
  tablle2:number=0;
  tablle3:number=0;
  tablle4:number=0;
//отвечает за обновления котов и столов
  catsUp1:number=1;
  catsUp2:number=1;
  catsUp3:number=1;
  catsUp4:number=1;

  tablleUp1:number=1;
  tablleUp2:number=1;
  tablleUp3:number=1;
  tablleUp4:number=1;
//кол-во денег (в начале равняется 100)
  money:number=1000;


  //открытие\закрытие магазина
   public getOperation() {
       this.result=0;
  
   }

   public getOperation1() {
    this.result=1;

}


//покупка котов,столов + начало появления денег с помощью сет интервала 
public cat1() {
  if(this.money>=30){
  this.money-=30;
  this.cats1=1;

  setInterval(() => this.money+=2+this.catsUp1, 2000);

  }
}

public cat2() {
if(this.money>=50){
this.money-=50;
this.cats2=1;
setInterval(() => this.money+=3+this.catsUp2, 1500);
}
}

public cat3() {
  if(this.money>=200){
  this.money-=200;
  this.cats3=1;
  setInterval(() => this.money+=7+this.catsUp3, 1000);
  }
}

public cat4() {
  if(this.money>=1000){
  this.money-=1000;
  this.cats4=1;
  setInterval(() => this.money+=16+this.catsUp4, 1000);
  }
}


public table1() {
if(this.money>=30){
this.money-=30;
this.tablle1=1;
setInterval(() => this.money+=1+this.tablleUp1, 2000);
}
}

public table2() {
  if(this.money>=40){
  this.money-=40;
  this.tablle2=1;
  setInterval(() => this.money+=3+this.tablleUp2, 1500);
  }
  }

public table3() {
  if(this.money>=150){
  this.money-=150;
  this.tablle3=1;
  setInterval(() => this.money+=5+this.tablleUp3, 1000);
  }
  }

public table4() {
  if(this.money>=900){
  this.money-=900;
  this.tablle4=1;
  setInterval(() => this.money+=7+this.tablleUp4, 1000);
  }
  }


//улучшение котов,столов + появление эффекта на 3 секунды
  public catUp1() {
    if(this.money>=900){
    this.money-=900;
    this.catsUp1+=1;
    this.upEffect=1;
    setTimeout(() =>this.upEffect=0 , 3000);
    }
  }
  
  public catUp2() {
  if(this.money>=1500){
  this.money-=1500;
  this.catsUp2+=1;
  this.upEffect=1;
    setTimeout(() =>this.upEffect=0 , 3000);
  }
  }
  
  public catUp3() {
    if(this.money>=2000){
    this.money-=2000;
    this.catsUp3+=1;
    this.upEffect=1;
    setTimeout(() =>this.upEffect=0 , 3000);
    }
  }
  
  public catUp4() {
    if(this.money>=3000){
    this.money-=3000;
    this.catsUp4+=1;
    this.upEffect=1;
    setTimeout(() =>this.upEffect=0 , 3000);
    }
  }
  
  
  public tableUp1() {
  if(this.money>=700){
  this.money-=700;
  this.tablleUp1+=1;
  this.upEffect=1;
  setTimeout(() =>this.upEffect=0 , 3000);
  }
  }
  
  public tableUp2() {
    if(this.money>=1000){
    this.money-=1000;
    this.tablleUp2+=1;
    this.upEffect=1;
    setTimeout(() =>this.upEffect=0 , 3000);
    }
    }
  
  public tableUp3() {
    if(this.money>=1500){
    this.money-=1500;
    this.tablleUp3+=1;
    this.upEffect=1;
    setTimeout(() =>this.upEffect=0 , 3000);
    }
    }
  
  public tableUp4() {
    if(this.money>=2500){
    this.money-=2500;
    this.tablleUp4+=1;
    this.upEffect=1;
    setTimeout(() =>this.upEffect=0 , 3000);
    }
    }

}
