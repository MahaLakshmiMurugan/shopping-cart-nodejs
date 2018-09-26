var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://i.ytimg.com/vi/lYckdMynkQ8/maxresdefault.jpg',
        title: 'White Flower',
        description: 'Awesome  !!!!!!',
        price: 20
    }),
    new Product({
        imagePath: 'http://picture-cdn.wheretoget.it/n2lmr5-l.jpg',
        title: 'Watch',
        description: 'Awesome  !!!!!!',
        price: 30
    }),
    new Product({
        imagePath: 'https://cdn.wallpapersafari.com/96/39/IxOw7d.jpg',
        title: 'Yellow Flower',
        description: 'Awesome  !!!!!!',
        price: 40
    }),
    new Product({
        imagePath: 'https://4.bp.blogspot.com/-o6ROFKdvasg/WnNhNKCulvI/AAAAAAAAaSU/iASRaoX-Er8DXZsOeJQQLDJ0GvSwVeIJQCLcBGAs/s1600/patterns%2Bcrochet.jpg',
        title: 'Clothes',
        description: 'Awesome  !!!!!!',
        price: 50
    }),
    new Product({
        imagePath: 'https://i.ytimg.com/vi/lYckdMynkQ8/maxresdefault.jpg',
        title: 'Gothic Game',
        description: 'Awesome  !!!!!!',
        price: 60
    }),
    new Product({
        imagePath: 'https://newfs.s3.amazonaws.com/taxon-images-1000s1000/Ruscaceae/maianthemum-racemosum-fr-abussewitz.jpg',
        title: 'maianthemum flower',
        description: 'Awesome  !!!!!!',
        price: 70
    })
];
done = 0;
for(var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}