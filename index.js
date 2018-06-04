const mongoose = require('mongoose');
require('dotenv/config');
mongoose.connect(process.env.PRODDB);

const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

Cat.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })