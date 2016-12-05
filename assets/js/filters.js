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
    arrows:false,
    step:1
    });
    $("#rangeSlider").rangeSlider({
      bounds:{
        min: -10,
        max: 200
      },
      step:1,
      arrows:false,
      defaultValues:{
        min: 10,
        max: 30
      }
      });
  });
  $("#answerSlider").rangeSlider({
    bounds:{
      min: 0,
      max: 50
    },
    step:1,
    arrows:false,
    defaultValues:{
      min: 1,
      max: 5
    }
});
  var date_min = new Date(2014, 1, 1);
  var date_max= new Date(2014, 10, 31);
  var vote_min =10;
  var vote_max =30;
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
var load=false;
  function adjustFilters(a){
    $(window).bind("load", function() {
      load=true;
});
  if(load){
    console.log(minVotes+" "+maxVotes+" "+ minAnswers+ " " + maxAnswers);
    console.log( new Date(minDate*1000)+" "+ new Date(maxDate*1000));
    if(a=="ans_min" || a=="ans_max"){
      $("#rangeSlider").rangeSlider("values", minVotes, maxVotes);
      $("#dateSlider").dateRangeSlider("values", new Date(minDate*1000), new Date(maxDate*1000));
    } else if(a=="date_min" || a=="date_max"){
      $("#rangeSlider").rangeSlider("values", minVotes, maxVotes);
      $("#answerSlider").rangeSlider("values", minAnswers, maxAnswers);
    } else if(a=="vote_min" || a=="vote_max"){
      $("#dateSlider").dateRangeSlider("values", new Date(minDate*1000), new Date(maxDate*1000));
      $("#answerSlider").rangeSlider("values", minAnswers, maxAnswers);
    } else if(a=="tagListLength" || a=="tagListLength"){
      $("#dateSlider").dateRangeSlider("values", new Date(minDate*1000), new Date(maxDate*1000));
      $("#answerSlider").rangeSlider("values", minAnswers, maxAnswers);
      $("#rangeSlider").rangeSlider("values", minVotes, maxVotes);
    }
  }
}
