// $('.HBT').click(changeImg);
// function changeImg() {
// const url = $(this).attr('src')
// $('.box1').attr('src', url)
// }

// $('.box1').hide('fast')

// const showIt = () => {
//  // $('#div1').show(2000)
//  $('.HBT').hide('fast');
//   $('.box1').show('fast')
// }

// const showIt2 = () => {
//  // $('#div1').show(2000)
//  $('.box1').hide('fast');
//   $('.HBT').show('fast')
// }

// $('.box1').click(showIt2)
// $('.HBT').click(showIt)


// $('#teams').change(updateHTML)

// function updateHTML() {
//   const team = $(this).val(); 
//   const body = $('.teams div').removeClass().addClass('team')
  
// }


$(document).ready(function() {
    $('nav').hide('fast');
    $('#teams').change(function() {
        $('.section').hide();
        $('#' + $(this).val()).show();
    });
});


