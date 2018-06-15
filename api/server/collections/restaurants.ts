import { MongoObservable } from 'meteor-rxjs';
import { Restaurant } from '../models';

export const Restaurants = new MongoObservable.Collection<Restaurant>('restaurants');