var unanswered = true,
    answered = true;

var maxAnswers=-1,
    minAnswers=80,
    maxVotes=-10,
    minVotes=200,
    minDate=200000000000,
    maxDate=0;


// TODO: Flush this object as soon as any node is selected from tree
var deletedTags = {};

window.addEventListener('DOMContentLoaded', function(e) {
  renderQuestions(e, null);
  renderTags(e);
  renderCharts("java");
}, true);

/*
** Called when a node is selected in tree
*/
function selectNode(tag) {
  deletedTags = {};
  renderCharts(tag);
  bubble_chart_init(tag);
}

function getTime(timeStamp_value) {
  var theDate = new Date(timeStamp_value * 1000);
  return theDate.toGMTString();
}
window.watch("vote_min",function(id,oldval,newval){
  //myf(id,newval);
  setTimeout(function(){
    myf(id,newval);
  },500);
  return newval;
});
window.watch("vote_max",function(id,oldval,newval){
//  myf(id,newval);
setTimeout(function(){
  myf(id,newval);
},500);
  return newval;
});
window.watch("date_min",function(id,oldval,newval){
  //myf(id,newval);
  setTimeout(function(){
    myf(id,newval);
  },500);
  return newval;
});
window.watch("date_max",function(id,oldval,newval){
  //myf(id,newval);
  setTimeout(function(){
    myf(id,newval);
  },500);
  return newval;
});
window.watch("ans_min",function(id,oldval,newval){
  //myf(id,newval);
  setTimeout(function(){
    myf(id,newval);
  },500);
  return newval;
});
window.watch("ans_max",function(id,oldval,newval){
//  myf(id,newval);
setTimeout(function(){
  myf(id,newval);
},500);
  return newval;
});
window.watch("tagListLength",function(id,oldval,newval){
//  myf(id,newval);
  filterByTag(id,newval);
  return newval
});

function filterByTag(a,b){
    questionList = qList.filter((val) =>{
      for(tag in tagList){
        if(val.tags.indexOf(tag)===-1){
          return false;
        }
      }
      return true;

        });
        renderQuestions(a,b);
        renderTags(a,b);
        renderCharts("java");

}

function myf(a,b){

  questionList = qList.filter((val) =>{

  if(val.votes<vote_min || val.votes>vote_max){
    return false;
  }
  if(val.answers<ans_min || val.answers>ans_max){
    return false;
  }


  if(new Date(val.timestamp*1000)< date_min || new Date(val.timestamp*1000)>date_max){
    return false;
  }
    return true;
  });
  //filterByTag(a,b);
  renderQuestions(a,b);
  renderTags(a,b);
  renderCharts("java");
}

/*
** renders questions in question panel
** @param (event, boolean, boolean, string) => (event, question-type flag, question-type flag, tag to be removed)
*/
function renderQuestions(a,b) {
  maxAnswers=-1;
      minAnswers=80;
      maxVotes=-10;
      minVotes=200;
      minDate=200000000000;
      maxDate=0;
  var list = '<ul>';
  for(var i=0; i < questionList.length; i++) {
    maxAnswers=Math.max(maxAnswers,questionList[i].answers);
    minAnswers=Math.min(minAnswers,questionList[i].answers);
    maxVotes=Math.max(maxVotes,questionList[i].votes);
    minVotes=Math.min(minVotes,questionList[i].votes);
    minDate=Math.min(minDate,questionList[i].timestamp);
    maxDate=Math.max(maxDate,questionList[i].timestamp);
    var tagMatched = false;
    if(!unanswered && questionList[i].answers == 0) {
      continue;
    }
    if(!answered && questionList[i].answers > 0) {
      continue;
    }

    if(deletedTags) {
      for(var j = 0; j < questionList[i].tags.length ; j++) {
        if(deletedTags[questionList[i].tags[j].toLowerCase()]) {
          tagMatched = true;
          break;
        }
      }
      if(tagMatched) continue;
    }

    var tags = "<div class='question-tags'>";
    for(var j = 0; j < questionList[i].tags.length ; j++) {
      tags = tags + "<button class='btn btn-default'>"+questionList[i].tags[j] +"</button>";
    }
    tags = tags + '</div>';
    var recommended_questions="<h4>Top Recommended Questions </h4> <div><h6>1. "+questionList[i].reco1+"</h6></div><div><h6>2. "+questionList[i].reco2+"</h6></div><div><h6>3. "+questionList[i].reco3+"</h6></div>";
  //  var recommended = "<button class='btn btn-primary' type='button' data-toggle='collapse' data-target='#collapseExample"+i+"' aria-expanded='false' aria-controls='collapseExample'>Button</button>"
    var question = "<div class='chat-body clearfix'> <div class='header'> <small class='text-muted'>"+ getTime(questionList[i].timestamp)+"</small></div><h4>"+ questionList[i].question +"</h4> "+tags+"</div><div class='recos'><li class='collapse' id='collapseExample"+i+"'><div class='well'>"+recommended_questions+"</div></li></div>",
        content = "<div class='question-list'> <span class='chat-img pull-left content-align-center'> <span class='font-medium'>"+ questionList[i].answers+"</span> </br> answers </span>"+ question +"</div>";
        list = list + "<li data-id="+i+" data-index="+questionList[i].index +" onclick='questionOnClick(this)' class='left clearfix animate-box-drop'> <div class='recommendation-box col-md-2' style='opacity:"+((questionList[i].votes/maxVotes)/2+((maxAnswers-questionList[i].answers)/maxAnswers)/2)+"'></div> " + content + "</li>";
  }

  list = list + "</ul>";
  document.getElementById("questionList").innerHTML = list;
  document.getElementById("heading-questions").innerHTML = questionList.length +" Questions";

  adjustFilters(a);

//  console.log("min - "+minAnswers+"  "+minVotes+"  "+ new Date(minDate*1000).toGMTString());
  //console.log("max - "+maxAnswers+"  "+maxVotes+"  "+ new Date(maxDate*1000).toGMTString());
}

/*
** renders tags in control panel
*/
function renderTags(a,b) {
  var tags = "";
  for(var obj in tagList) {
    tags = tags + "<button class='btn btn-default padding-small margin-right-small' value="+ obj +" onclick='removeTag(this.value)'>"+ obj+" <i class='fa fa-times-circle' aria-hidden='true'></i> </button>";
  }
  document.getElementById("controls--tags").innerHTML = tags;
}

function renderCharts(tag) {
  var questionPercent = (tagList2[tag].size / 215968 * 100).toFixed(2);

  if(tagList2[tag] == undefined || tagList2[tag] ==null) {
    document.getElementById("data-chart1").setAttribute("data-percent", questionPercent);
    //document.getElementById("data-chart2").setAttribute("data-percent", tagList[tag].unansweredQuestionPercent);
    document.getElementById("data-chart1").innerHTML ="<span class='percent'>"+questionPercent+"%</span>";
    //document.getElementById("data-chart2").innerHTML ="<span class='percent'>"+tagList[tag].unansweredQuestionPercent+"%</span>";
    document.getElementById("data-chart-header1").innerHTML = "<h4>Questions for <strong>"+tag+"</strong> tag</h4>";
    //document.getElementById("data-chart-header2").innerHTML = "<h4>Unanswered questions for <strong>"+tag+"</strong> tag</h4>";
    document.getElementById("data-wordcloud-header").innerHTML = "<h4>You selected <strong>"+tag+"</strong> tag</h4><br><h5>Following are nearest tags to your selection.</h5>";
    return;
  }
  document.getElementById("data-chart1").setAttribute("data-percent", questionPercent);
  //document.getElementById("data-chart2").setAttribute("data-percent", tagList[tag].unansweredQuestionPercent);
  document.getElementById("data-chart-header1").innerHTML = "<h4>Questions for <strong>"+tag+"</strong> tag</h4>";
  //document.getElementById("data-chart-header2").innerHTML = "<h4>Unanswered questions for <strong>"+tag+"</strong> tag</h4>";
  document.getElementById("data-wordcloud-header").innerHTML = "<h4>You selected <strong>"+tag+"</strong> tag</h4><br><h5>Following are nearest tags to your selection.</h5>";
  document.getElementById("data-chart1").innerHTML ="<span class='percent'>"+questionPercent+"%</span>";
  //document.getElementById("data-chart2").innerHTML ="<span class='percent'>"+tagList[tag].unansweredQuestionPercent+"%</span>";
}


/********************CALLBACK FUNCTIONS****************/
/*
** checkbox onclick for question type control
*/
function questionOnClick(question) {
   if(question.classList.contains('selected')) {
     var id ="#collapseExample"+question.getAttribute('data-id');
     $(id).collapse('hide');
     question.classList.remove('selected');
     refresh();
   } else {
     var id2 ="#collapseExample"+question.getAttribute('data-id');
     $(id2).collapse('show');
     var children = question.parentElement.childNodes;
     // deselect all other questions
     for(var i=0; i < children.length; i++) {
       if(children[i].classList.contains('selected')) {
         children[i].classList.remove('selected');
         var id3 ="#collapseExample"+children[i].getAttribute('data-id');
         $(id3).collapse('hide');
       }
     }
     question.classList.add('selected');
     var selectedQuesIndex = question.getAttribute("data-index");
     for(var i = 0; i < questionList.length ; i++) {
       if(questionList[i].index == selectedQuesIndex) {
         // from tree.js
         refresh();
         for(var j=0; j < questionList[i].tags.length; j++) {
           // from tree.js
           highlightTag(questionList[i].tags[j]);
         }
         break;
       }
     }
   }
}

function filterQuestionType(e) {
  var checkboxes = e.closest(".question-type").getElementsByTagName("input");
    if(checkboxes[0].checked) {
      unanswered = true;
    } else {
      unanswered = false;
    }
    if(checkboxes[1].checked) {
      answered = true;
    } else {
      answered = false;
    }
    renderQuestions(e, null);
}

function removeTag(e) {
  var d=tagList[e].node;
  delete tagList[e];
  renderTags();
  filterByTag();
  renderQuestions();
  deactivate(d);
//  clearTag(e);
}
