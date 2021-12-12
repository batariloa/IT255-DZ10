import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Card } from '../tweet/model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ApiRequestError } from 'twitter-api-v2';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  public cardData:any[] = [];
input:number;



  constructor(private route:ActivatedRoute, private router:Router, private api:ApiService) 
  {
  this.input=0;  
   }

  ngOnInit(): void {
    this.nadjiKarte()
    
  }

  prikaziKartu(){
   this.router.navigate(['card', {id: this.input}])
  }

  async nadjiKarte(){
    (this.api.getAllCards())!.subscribe((res:any)=>{
      this.cardData = res.data;
      console.log(this.cardData)
      
    });
}
}
