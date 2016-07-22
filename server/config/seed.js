'use strict';

import Game from '../api/game/game.model';
import User from '../api/user/user.model';

Game.find({}).remove()
  .then(() => {
    Game.create({
      name:'Halo 5',
      platform: 'Xbox',
      genre: 'Shooter'
    }, {
      name: 'Fallout',
      platform: 'PS4',
      genre: 'Role playing'
    }, {
      name: 'Pokemon',
      platform: 'DS3',
      genre: 'Role playing'
    });
  });


User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
