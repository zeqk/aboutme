var colors = ['red',
'pink',
'purple',
'deep-purple',
'indigo',
'blue',
'light-blue',
'cyan',
'teal',
'green',
'light-green',
'lime',
'yellow',
'amber',
'orange',
'deep-orange',
'brown',
'grey',
'blue-grey'];

$('.brick').each(function(){
   var color = colors[Math.round(Math.random()*colors.length)];
    console.log(color);
    $(this).addClass('b-'+color);
});



// var $board = $('.board').packery({
//     itemSelector: '.brick'
// });

$('.brick').each( function( i, boardItem ) {
  var draggie = new Draggabilly( boardItem );
  // bind drag events to Packery
  // $board.packery( 'bindDraggabillyEvents', draggie );
});