$(function(){
	$(document).keydown(function(e){
		var keyChar =
		app.activeKeys.add(new app.PressedKey({keyCode:e.keyCode,keyChar:getChar(e)}));
	});
	$(document).keyup(function(e){
		app.activeKeys.remove( app.activeKeys.get(e.keyCode) );
	});
});

function getChar(e) {
  return String.fromCharCode(e.keyCode);
}
