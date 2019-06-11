$(document).ready(function(){
  $('#blanks form').submit(function(event) {
      event.preventDefault();
      var answer1=$('#Breakfast1').val()
      var answer2=$('#Lunch1').val()
      var answer3=$('#Dinner1').val()

      var array=[answer1,answer2,answer3]
      console.log(array[1]);
      var array1=[]
      array1.push(answer2)

      $('#questions').append('<li>'+ array1[0] +'</li>')





    });
});
