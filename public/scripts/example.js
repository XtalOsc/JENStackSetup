console.log('8bit example sourced');

$(document).ready(function(){
  console.log('jQuery ready');
  $('#postNow').on('click',function(){
    console.log('in postNow on click');

    var objectToSend={
      request: 'from client'
    }//end objectToSend
    console.log('sending: ',objectToSend);

    $.ajax({
      type: 'POST',
      url: '/poster',
      data: objectToSend,
      success: function(data){
        console.log('back from sever with: ',data);
      }//end success
    });//end ajax
  });//end on click



});//end doc ready
