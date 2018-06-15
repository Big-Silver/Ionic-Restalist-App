import { Meteor } from 'meteor/meteor';
import { Restaurants } from './collections/restaurants';
import { Restaurant } from './models';

Meteor.startup(() => {
  // code to run on server at startup
  if (Restaurants.find({}).cursor.count() === 0) {

    Restaurants.collection.insert({
      title: 'La muraille du Phenix',
      picture: 'https://static4.pagesjaunes.fr/media/ugc/la_muraille_du_phenix_07505600_155717117?w=1500&h=800&crop=false',
      description: 'Un tres bon chinuase restaurant'
    });
      
    Restaurants.collection.insert({
      title: 'Bar Turystyczny',
      picture: 'https://pp.userapi.com/c841122/v841122354/358fe/FLsGi0n1T0o.jpg',
      description: 'Bardzo fajne mejsce'
    });

    Restaurants.collection.insert({
      title: 'LIDO',
      picture: 'http://dream-land.by/belarus/minsk/lido/images/body_7330.jpg',
      description: 'Velmi smachnaya ezha'
    });
  };
});
