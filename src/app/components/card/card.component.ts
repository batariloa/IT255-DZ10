import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Card } from './model';
import { Router, ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


import { ApiService } from 'src/app/services/api.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit,OnDestroy {

  public cardData2:any= {};
  data:any;
  id:number;
  sub?:Subscription;

  constructor(private api:ApiService, private http:HttpClient, private route:ActivatedRoute) {
   
  this.id=0;
 
  }

   ngOnInit() {
    
    this.sub = this.route.params.subscribe(params => {
      const id = Number.parseInt(params['id']);
      this.id = id;

      this.nadjiKartu();
   }  );
    console.log("ucitan" + this.id );
   
 
    }

    async nadjiKartu(){
  await (this.api.getCards(this.id))!.subscribe((res:any)=>{
    this.cardData2 = res.data[0];
        console.log("yipe");
        console.log(this.cardData2);
      });
  }
ngOnDestroy(){
  this.route.params.subscribe()
}
  

}