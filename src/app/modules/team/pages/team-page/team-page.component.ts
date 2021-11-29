import { Component, OnInit } from '@angular/core';
import axios from 'axios';

import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {

  id:number = 5;
  hero:any;

  constructor(public heroServ:HeroService ) { }

  ngOnInit(): void {

    this.heroServ.getHero(this.id).subscribe(data =>{
      this.hero = data;
      console.log(this.hero)
    })

//     axios("https://www.superheroapi.com/api.php/4615359005174115/5"
// )
//     .then(res=>{console.log(res)});
  }

}
