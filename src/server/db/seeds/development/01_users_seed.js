'use strict';

const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  return knex('users').del() // Deletes ALL existing entries
    .then(function() { // Inserts seed entries one by one in series
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('password123', salt);
      return knex('users').insert({
        id: 1,
        username: 'chris',
        password: hash,
        bio: 'Typewriter synth sriracha, try-hard umami truffaut health goth freegan. Master cleanse letterpress selvage kickstarter keffiyeh jianbing, celiac tousled. Chartreuse mlkshk vape fixie. Literally kitsch humblebrag leggings, vape poke migas jean shorts. Ugh waistcoat mustache prism, letterpress unicorn post-ironic williamsburg flexitarian tumeric sustainable VHS banh mi mlkshk YOLO. Authentic VHS lyft, street art hella iPhone cardigan. Biodiesel intelligentsia viral chartreuse bicycle rights chambray, bespoke waistcoat marfa yr.',
        admin: true
      });
    }).then(function () {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('password123', salt);
      return knex('users').insert({
        id: 2,
        username: 'ari',
        password: hash,
        bio: 'Typewriter synth sriracha, try-hard umami truffaut health goth freegan. Master cleanse letterpress selvage kickstarter keffiyeh jianbing, celiac tousled. Chartreuse mlkshk vape fixie. Literally kitsch humblebrag leggings, vape poke migas jean shorts. Ugh waistcoat mustache prism, letterpress unicorn post-ironic williamsburg flexitarian tumeric sustainable VHS banh mi mlkshk YOLO. Authentic VHS lyft, street art hella iPhone cardigan. Biodiesel intelligentsia viral chartreuse bicycle rights chambray, bespoke waistcoat marfa yr.',
        admin: true
      });
    }).then(function () {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('password123', salt);
      return knex('users').insert({
        id: 3,
        username: 'matt',
        password: hash,
        bio: 'Typewriter synth sriracha, try-hard umami truffaut health goth freegan. Master cleanse letterpress selvage kickstarter keffiyeh jianbing, celiac tousled. Chartreuse mlkshk vape fixie. Literally kitsch humblebrag leggings, vape poke migas jean shorts. Ugh waistcoat mustache prism, letterpress unicorn post-ironic williamsburg flexitarian tumeric sustainable VHS banh mi mlkshk YOLO. Authentic VHS lyft, street art hella iPhone cardigan. Biodiesel intelligentsia viral chartreuse bicycle rights chambray, bespoke waistcoat marfa yr.',
        admin: true
      });
    }).then(function () {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('password123', salt);
      return knex('users').insert({
        id: 4,
        username: 'liz',
        password: hash,
        bio: 'Typewriter synth sriracha, try-hard umami truffaut health goth freegan. Master cleanse letterpress selvage kickstarter keffiyeh jianbing, celiac tousled. Chartreuse mlkshk vape fixie. Literally kitsch humblebrag leggings, vape poke migas jean shorts. Ugh waistcoat mustache prism, letterpress unicorn post-ironic williamsburg flexitarian tumeric sustainable VHS banh mi mlkshk YOLO. Authentic VHS lyft, street art hella iPhone cardigan. Biodiesel intelligentsia viral chartreuse bicycle rights chambray, bespoke waistcoat marfa yr.',
        admin: true
      });
    }).then(function () {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('password123', salt);
      return knex('users').insert({
        id: 5,
        username: 'laura',
        password: hash,
        bio: 'Typewriter synth sriracha, try-hard umami truffaut health goth freegan. Master cleanse letterpress selvage kickstarter keffiyeh jianbing, celiac tousled. Chartreuse mlkshk vape fixie. Literally kitsch humblebrag leggings, vape poke migas jean shorts. Ugh waistcoat mustache prism, letterpress unicorn post-ironic williamsburg flexitarian tumeric sustainable VHS banh mi mlkshk YOLO. Authentic VHS lyft, street art hella iPhone cardigan. Biodiesel intelligentsia viral chartreuse bicycle rights chambray, bespoke waistcoat marfa yr.',
        admin: true
      });
    }).then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
    });
};
