import { Component, OnInit } from '@angular/core';
import { Restaurants } from 'api/collections/restaurants';
import { Observable } from 'rxjs';
import { NavController } from 'ionic-angular';

import { DetailsPage } from '../details/details';
import { Restaurant } from 'api/models';
 
@Component({
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {
  public restaurants;
  public searchKey: string

  constructor (private navCtrl: NavController) {
  }

  ngOnInit () {
    this.restaurants = Restaurants.find({})
  }

  showRestaurantDetails (restaurant): void {
    let restaurants = this.restaurants.fetch();

    this.navCtrl.push(DetailsPage, {restaurant, restaurants});
  }

  onSearch(foo): void {
    let regex = new RegExp(this.searchKey);
    this.restaurants = Restaurants.find({
      title: { $regex: regex, $options: 'i'}});
  }
}
