'use strict';

const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  return knex('users').del() // Deletes ALL existing entries
    .then(function() { // Inserts seed entries one by one in series
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('password123', salt);
      return knex('users').insert({
        id: 1,
        address_id: 5,
        username: 'chris',
        first_name: 'Christoper',
        middle_name: 'Lee',
        last_name: 'Childs',
        email: 'chris@email.com',
        password: hash,
        bio: 'Typewriter synth sriracha, try-hard umami truffaut health goth freegan. Master cleanse letterpress selvage kickstarter keffiyeh jianbing, celiac tousled. Chartreuse mlkshk vape fixie. Literally kitsch humblebrag leggings, vape poke migas jean shorts. Ugh waistcoat mustache prism, letterpress unicorn post-ironic williamsburg flexitarian tumeric sustainable VHS banh mi mlkshk YOLO. Authentic VHS lyft, street art hella iPhone cardigan. Biodiesel intelligentsia viral chartreuse bicycle rights chambray, bespoke waistcoat marfa yr.',
        date_of_birth: '10/05/1987',
        admin: true
      });
    }).then(function () {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('password123', salt);
      return knex('users').insert({
        id: 2,
        address_id: 4,
        username: 'ari',
        first_name: 'Ari',
        middle_name: 'Jay',
        last_name: 'Boomer',
        email: 'ari@email.com',
        password: hash,
        bio: 'Typewriter synth sriracha, try-hard umami truffaut health goth freegan. Master cleanse letterpress selvage kickstarter keffiyeh jianbing, celiac tousled. Chartreuse mlkshk vape fixie. Literally kitsch humblebrag leggings, vape poke migas jean shorts. Ugh waistcoat mustache prism, letterpress unicorn post-ironic williamsburg flexitarian tumeric sustainable VHS banh mi mlkshk YOLO. Authentic VHS lyft, street art hella iPhone cardigan. Biodiesel intelligentsia viral chartreuse bicycle rights chambray, bespoke waistcoat marfa yr.',
        date_of_birth: '3/25/1964',
        admin: false
      });
    }).then(function () {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('password123', salt);
      return knex('users').insert({
        id: 3,
        address_id: 3,
        first_name: 'Matthew',
        middle_name: 'John',
        last_name: 'Gordon',
        email: 'matt@email.com',
        username: 'matt',
        password: hash,
        bio: 'Typewriter synth sriracha, try-hard umami truffaut health goth freegan. Master cleanse letterpress selvage kickstarter keffiyeh jianbing, celiac tousled. Chartreuse mlkshk vape fixie. Literally kitsch humblebrag leggings, vape poke migas jean shorts. Ugh waistcoat mustache prism, letterpress unicorn post-ironic williamsburg flexitarian tumeric sustainable VHS banh mi mlkshk YOLO. Authentic VHS lyft, street art hella iPhone cardigan. Biodiesel intelligentsia viral chartreuse bicycle rights chambray, bespoke waistcoat marfa yr.',
        date_of_birth: '10/05/1987',
        admin: false
      });
    }).then(function () {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('password123', salt);
      return knex('users').insert({
        id: 4,
        username: 'liz',
        first_name: 'Elizabeth',
        middle_name: 'Lori',
        last_name: 'Goner',
        email: 'liz@email.com',
        password: hash,
        bio: 'Typewriter synth sriracha, try-hard umami truffaut health goth freegan. Master cleanse letterpress selvage kickstarter keffiyeh jianbing, celiac tousled. Chartreuse mlkshk vape fixie. Literally kitsch humblebrag leggings, vape poke migas jean shorts. Ugh waistcoat mustache prism, letterpress unicorn post-ironic williamsburg flexitarian tumeric sustainable VHS banh mi mlkshk YOLO. Authentic VHS lyft, street art hella iPhone cardigan. Biodiesel intelligentsia viral chartreuse bicycle rights chambray, bespoke waistcoat marfa yr.',
        date_of_birth: '02/02/1995',
        admin: false
      });
    }).then(function () {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('password123', salt);
      return knex('users').insert({
        id: 5,
        username: 'laura',
        first_name: 'Laura',
        middle_name: 'Elizabeth',
        last_name: 'Johnson',
        email: 'laura@email.com',
        password: hash,
        bio: 'Typewriter synth sriracha, try-hard umami truffaut health goth freegan. Master cleanse letterpress selvage kickstarter keffiyeh jianbing, celiac tousled. Chartreuse mlkshk vape fixie. Literally kitsch humblebrag leggings, vape poke migas jean shorts. Ugh waistcoat mustache prism, letterpress unicorn post-ironic williamsburg flexitarian tumeric sustainable VHS banh mi mlkshk YOLO. Authentic VHS lyft, street art hella iPhone cardigan. Biodiesel intelligentsia viral chartreuse bicycle rights chambray, bespoke waistcoat marfa yr.',
        date_of_birth: '05/29/1985',
        admin: false
      });
    }).then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
    });
};
