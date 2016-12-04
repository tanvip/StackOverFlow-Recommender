$(document).ready(function() {
  $("#dateSlider").dateRangeSlider({
    bounds:{
      min: new Date(2014, 0, 1),
      max: new Date(2014, 11, 31)
    },
    defaultValues:{
      min: new Date(2014, 1, 1),
      max: new Date(2014, 10, 31)
    },
    step:1
    });
    $("#rangeSlider").rangeSlider({
      bounds:{
        min: -10,
        max: 250
      },
      step:1,
      defaultValues:{
        min: 10,
        max: 70
      }
      });
  });
  $("#answerSlider").rangeSlider({
    bounds:{
      min: 0,
      max: 30
    },
    step:1,
    defaultValues:{
      min: 1,
      max: 5
    }
});
  var date_min = new Date(2014, 1, 1);
  var date_max= new Date(2014, 10, 31);
  var vote_min =10;
  var vote_max =70;
  var ans_min = 1;
  var ans_max = 5;
  $("#rangeSlider").on("valuesChanging", function(e, data){
    vote_min = data.values.min;
    vote_max = data.values.max;
  });
  $("#dateSlider").on("valuesChanging", function(e, data){
    date_min = data.values.min;
    date_max = data.values.max;
  });

  $("#answerSlider").on("valuesChanging", function(e, data){
    ans_min = data.values.min;
    ans_max = data.values.max;
  });
