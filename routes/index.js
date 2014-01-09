
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render( 'index', {
  	title: 'Type Trend',
  	partials: {
  		footer: 'partials/footer.hogan',
  		header: 'partials/header.hogan',
  		pageScripts: 'partials/scripts/index.hogan',
  		pageTemplates: 'partials/templates/mainTemplates.hogan'
  	}
  });
};