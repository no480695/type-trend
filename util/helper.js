var
helper       = module.exports = {},
_         = require('underscore'),
moment    = require('moment'),
async     = require('async');

helper.getImpression = function( req, res, next ){

  var era = req.params.era;

  res.locals.era = era;

  next();
}

helper.defineFlickrUserData = function( req, res, next ){

  if ( res.locals.era == 'world-war-two' ){
    res.locals.flickrUserID = '';
  }
  else if ( res.locals.era == 'world-war-one' ){
    res.locals.flickrUserID = '';
  }
  else if ( res.locals.era == 'civil-war' ){
    res.locals.flickrUserID = '';
  }
  else if ( res.locals.era == 'american-revolutionary-war' ){
    res.locals.flickrUserID = '111746134@N05';
  }
  else if ( res.locals.era == 'war-of-1812' ){
    res.locals.flickrUserID = '';
  }
  else if ( res.locals.era == 'french-and-indian-war' ){
    res.locals.flickrUserID = '';
  }
  else{
    res.locals.flickrUserID = '';
  }

  next();
}
