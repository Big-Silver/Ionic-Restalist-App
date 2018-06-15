import { MeteorObservable } from 'meteor-rxjs';
import { Restaurants } from 'api/collections/restaurants';

import { Component, ChangeDetectorRef } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Restaurant } from 'api/models'
 
@Component({
  selector: 'details-page',
  templateUrl: `details.html`
})
export class DetailsPage {
  selectedRestaurant: Restaurant;
  restaurants: Restaurant[];
  title: string;
  picture: string;
  description: string;
  isEditing: boolean;
 
  constructor (private navParams: NavParams,
               private cdr: ChangeDetectorRef) {
    this.selectedRestaurant = <Restaurant>navParams.get('restaurant');
    this.restaurants = <Restaurant[]>navParams.get('restaurants');
    this.resetData();
  }
  
  public saveChangedDetails (): void {
    if (!this.isChanged()) return;

    let restaurant = {
      _id: this.selectedRestaurant._id,
      title: this.title,
      picture: this.picture,
      description: this.description
    };

    MeteorObservable.call('updateRestaurantDetails',
      restaurant
    ).subscribe((result) => {
      this.isEditing = false;
    });
  }

  public switchToPrevious () {
    for (let i=0; i<this.restaurants.length; i++) {
      if (this.selectedRestaurant._id === this.restaurants[i]._id) {
        this.selectedRestaurant = this.restaurants[i+1] || this.restaurants[i];
        this.resetData();
        break;
      }
    }
  }

  public switchToNext () {
    for (let i=0; i<this.restaurants.length; i++) {
      if (this.selectedRestaurant._id === this.restaurants[i]._id) {
        this.selectedRestaurant = this.restaurants[i-1] || this.restaurants[i];
        this.resetData();
        break;
      }
    }
  }

  public resetData (): void {
    this.title = this.selectedRestaurant.title;
    this.picture = this.selectedRestaurant.picture;
    this.description = this.selectedRestaurant.description;
    this.isEditing = false;
    // this.cdr.detectChanges();
  }

  private isChanged (): boolean {
    return this.title !== this.selectedRestaurant.title ||
           this.picture !== this.selectedRestaurant.picture ||
           this.description !== this.selectedRestaurant.description;
  }
}