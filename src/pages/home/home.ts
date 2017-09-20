import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //Cards
  cards = [
    {
      imgPath: "cat1.jpg",
      title: "Orange Kitten",
      desc: "This is a cute little orange kitten.",
      favorited: false,
      saved: false
    },

    {
      imgPath: "cat2.jpg",
      title: "Kitten In a Tube",
      desc: "This little cat is stuck in a tube.",
      favorited: false,
      saved: false
    },

    {
      imgPath: "cat3.jpg",
      title: "White Kitten",
      desc: "This is a cute little white kitten.",
      favorited: false,
      saved: false
    }
  ];


  constructor(public navCtrl: NavController) {

  }


  //Type Here
  clickFav(card) {
    let index = this.cards.indexOf(card);

    if (index > -1){
      if(card.favorited) {
        this.cards[index].favorited = false;
      } else {
        this.cards[index].favorited = true;
      }
    }
  }

  clickSave(card) {
    let index = this.cards.indexOf(card);

    if (index > -1){
      if(card.saved) {
        this.cards[index].saved = false;
      } else {
        this.cards[index].saved = true;
      }
    }
  }


}
