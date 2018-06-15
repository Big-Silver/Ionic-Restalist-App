import { Restaurants } from './collections/restaurants';
import { Restaurant } from './models';
 
Meteor.methods({
  updateRestaurantDetails(restaurant: Restaurant) {
    const restaurantExists = !!Restaurants.collection.find(restaurant._id).count();
 
    if (!restaurantExists) {
      throw new Meteor.Error('restaurant-not-exists',
        'Restaurant doesn\'t exist');
    }
 
    Restaurants.collection.update(
      { _id: restaurant._id }, 
      { title: restaurant.title,
        description: restaurant.description,
        picture: restaurant.picture
      }
    )

    return true;
  }
});