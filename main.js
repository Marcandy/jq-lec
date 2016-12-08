$('document').ready(function() {
  var input = $('#myInput');
  var button = $('#myButton')
  var section = $('.child')
  //if you make a lot jquery selection meaning accessing the document -- it will be slow -- because accessing the dom is slow
  //like saving a selection to a variable before a for loop

  button.on('click', function() {
    section.text(input.val());
  })
})
