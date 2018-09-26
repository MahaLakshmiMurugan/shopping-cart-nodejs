var User = require('../models/user');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

var users =[
    new User({
        email: 'maha@example.com',
        password: '$2y$13$1jVO8RumaTvjYc/T/i2zuuX/afCjm9vx3DUnBkR6P8NuQLGcD32sq'
    })
];

    done = 0;
for(var i = 0; i < users.length; i++){
    users[i].save(function(err, result){
        done++;
        if(done === users.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}