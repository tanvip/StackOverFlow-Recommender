var unanswered = true,
    answered = true;

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
  console.log(tagList);
}

function getTime(timeStamp_value) {
  var theDate = new Date(timeStamp_value * 1000);
  return theDate.toGMTString();
}
window.watch("vote_min",function(id,oldval,newval){
  myf(id,newval);
  return newval;
});
window.watch("vote_max",function(id,oldval,newval){
  myf(id,newval);
  return newval;
});
window.watch("date_min",function(id,oldval,newval){
  myf(id,newval);
  return newval;
});
window.watch("date_max",function(id,oldval,newval){
  myf(id,newval);
  return newval;
});
window.watch("ans_min",function(id,oldval,newval){
  myf(id,newval);
  return newval;
});
window.watch("ans_max",function(id,oldval,newval){
  myf(id,newval);
  return newval;
});
window.watch("tagListLength",function(id,oldval,newval){
  filterByTag(id,newval);
  return newval
});

function filterByTag(a,b){
    questionList = qList.filter((val) =>{
      // for(var tag in val.tags){
      //   console.log(val.tags[tag]);
      // }
      for(tag in tagList){
      //  console.log("taglist "+tag);
        if(val.tags.indexOf(tag)===-1){
          return false;
        }
      }
    //  console.log(val.tags);
      return true;

        });
        renderQuestions();
        renderTags();
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
  renderQuestions();
  renderTags();
  renderCharts("java");
}

/*
** renders questions in question panel
** @param (event, boolean, boolean, string) => (event, question-type flag, question-type flag, tag to be removed)
*/
function renderQuestions(e) {
  var list = '<ul>';
  for(var i=0; i < questionList.length; i++) {
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
    var question = "<div class='chat-body clearfix'> <div class='header'> <small class='text-muted'>"+ getTime(questionList[i].timestamp)+"</small></div><p>"+ questionList[i].question +"</p> "+tags+"</div>",
        content = "<div class='question-list'> <span class='chat-img pull-left content-align-center'> <span class='font-medium'>"+ questionList[i].answers+"</span> </br> answers </span>"+ question +"</div>";
        list = list + "<li data-index="+questionList[i].index +" onclick='questionOnClick(this)' class='left clearfix animate-box-drop'> <div class='recommendation-box col-md-2' style='opacity:"+((questionList.length-i)/questionList.length)+"'></div> " + content + "</li>";
  }

  list = list + "</ul>";
  document.getElementById("questionList").innerHTML = list;
  document.getElementById("heading-questions").innerHTML = questionList.length +" Questions";
}

/*
** renders tags in control panel
*/
function renderTags(e) {
  var tags = "";
  for(var obj in tagList) {
    if(deletedTags[obj.toLowerCase()]) continue;
    tags = tags + "<button class='btn btn-default padding-small margin-right-small' value="+ obj +" onclick='removeTag(this)'>"+ obj+" <i class='fa fa-times-circle' aria-hidden='true'></i> </button>";
  }
  document.getElementById("controls--tags").innerHTML = tags;
}

function renderCharts(tag) {
  var questionPercent = (tagList[tag].size / 215968 * 100).toFixed(2);
  if(tagList[tag] == undefined || tagList[tag] ==null) {
    console.log("Error: No tag found!");
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
     question.classList.remove('selected');
     refresh();
   } else {
     var children = question.parentElement.childNodes;
     // deselect all other questions
     for(var i=0; i < children.length; i++) {
       if(children[i].classList.contains('selected')) {
         children[i].classList.remove('selected');
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
  deletedTags[e.value.toLowerCase()] = true;
  renderQuestions(e, e.value);
  renderTags(e);
}
