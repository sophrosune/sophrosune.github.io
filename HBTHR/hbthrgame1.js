$( function() {
$(".card-img-top").draggable();
$(".textcard").droppable({
  drop: function(event, ui){
 var draggable = ui.draggable;
 console.log(draggable.attr('id'));
  }
});
});