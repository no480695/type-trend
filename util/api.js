var
api       = module.exports = {},
request = require('request'),
_         = require('underscore'),
moment    = require('moment'),
async     = require('async'),
cache  = require('memory-cache'),
mongo = require('mongodb-wrapper'),
db = mongo.db('localhost', 27017, 'type-trend'); //host-port-dbName

api.deleteEvent = function( req, res, next ){

  var eventID = req.body['_id'];

  db.collection('events');

  db.events.remove({'_id': mongo.ObjectID(eventID)},function( err ){
    if( err ){
      res.send(503,'error');
    }
    else{
      res.send(200,'ok');
    }
  });

}

api.editEvent = function( req, res, next ){

  var eventID = req.body['_id'];

  var obj = {
    title: req.body.title,
    description: req.body.description,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
    address: req.body.address,
    impression: req.session.impression
  };

  db.collection('events');

  db.events.update({'_id': mongo.ObjectID(eventID)},obj,function( err ){
    if( err ){
      res.send(503,'error');
    }
    else{
      res.send('ok');
    }
  });

}

api.getEvent = function( req, res, next ){

  var eventID = req.body['event-id'];

  db.collection('events');

  db.events.findOne({'_id': mongo.ObjectID(eventID)},function( err, data ){
    if( err ){
      res.send(503,'error');
    }
    else{
      res.send(200,data);
    }
  });

}

api.getImpressionEvents = function( req, res, next ){

    db.collection('events');

    db.events.find({'impression':res.locals.era}).toArray(function(err, events) {
        res.locals.impressionEvents = events;
        next();
    });

}


Array.prototype.cut=function(x)
{
    for(var a=0,r=[];a<=x;a++)
    {
        r[a]=[];
        for(var b=0;b<x;b++)
        {
            if(this[x*a+b])
            {
                r[a].push(this[x*a+b]);
            }
        }
    }
    return r;
}