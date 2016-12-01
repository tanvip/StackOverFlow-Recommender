window.addEventListener('DOMContentLoaded', function(e) {
  main(e)
}, true);

function getTime(timeStamp_value) {
  var theDate = new Date(timeStamp_value * 1000);
  return theDate.toGMTString();
}

function questionOnClick(question) {
   if(question.classList.contains('selected')) {
     question.classList.remove('selected');
   }
   question.classList.add('selected');
}

function main(e) {
  //fill questions
  var list = '<ul>';
  for(var i=0; i < questionList.length; i++) {
    var question = "<div class='chat-body clearfix'> <div class='header'> <strong class='primary-font'>John Doe</strong> <small class='text-muted'>"+ getTime(questionList[i].timestamp)+"</small></div><p>"+ questionList[i].question +"</p></div>",
        content = "<div class='question-list'> <span class='chat-img pull-left content-align-center'> <span class='font-medium'>"+ questionList[i].answers.length+"</span> </br> answers </span>"+ question +"</div>";
        list = list + "<li onclick='questionOnClick(this)' class='left clearfix'> <div class='recommendation-box col-md-2'></div> " + content + "</li>";
  }
  list = list + "</ul>";
  document.getElementById("questionList").innerHTML = list;
}
