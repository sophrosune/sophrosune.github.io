$( function() {
$(".card-img-top").draggable();
$(".textcard").droppable({
  drop: function(event, ui){
 var draggable = ui.draggable;
 // console.log(draggable.attr('id'));
  }
})
});

// $(function() {
//   $('.recardPile').draggable(
//     {revert: 'invalid',
//     stop: function(){
//       $(this).draggable('option','revert','invalid')
//     }
//   }
//   );

//   dropped('.hb1', 'hb1');


// });


$( function() {
$(".card-img-top").draggable();
$(".textcard").droppable({
  drop: function(event, ui){
 var draggable = ui.draggable;
 if(draggable.attr('id')===recardPile) {
  alert('that is right!');
 //  $(this).addClass('correct').fadeIn('slow').css('background-color', '#D14428' ).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
 //    $(this).removeClass('animated shake');
 // })
 }
  } 
})
});

function userSelectsOption () {
	$('#teams').change(function (event) {
    $('option:selected').val();
    alert($('option:selected').val());
	})
}

















