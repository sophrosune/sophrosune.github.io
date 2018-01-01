
var correctCards = 0;
$( init );
 
function init() {
 
  // Hide the success message
  $('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );
 
  // Reset the game
  correctCards = 0;
  $('#recardPile').html( '' );
  $('#recardSlots').html( '' );


function init() {
  $('#hb1').draggable({
  	containment: '#content',
    cursor: 'move',
    snap: '#content'
stop: handleDragStop});
  $('#hb1').droppable( {
    drop: handleDropEvent
  } );
}