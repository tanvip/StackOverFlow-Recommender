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
}

function getTime(timeStamp_value) {
  var theDate = new Date(timeStamp_value * 1000);
  return theDate.toGMTString();
}

/*
** renders questions in question panel
** @param (event, boolean, boolean, string) => (event, question-type flag, question-type flag, tag to be removed)
*/
function renderQuestions(e) {
  var list = '<ul>',
      tagMatched = false;
  for(var i=0; i < questionList.length; i++) {
    if(!unanswered && questionList[i].answers.length == 0) {
      continue;
    }
    if(!answered && questionList[i].answers.length > 0) {
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
        content = "<div class='question-list'> <span class='chat-img pull-left content-align-center'> <span class='font-medium'>"+ questionList[i].answers.length+"</span> </br> answers </span>"+ question +"</div>";
        list = list + "<li onclick='questionOnClick(this)' class='left clearfix animate-box-drop'> <div class='recommendation-box col-md-2'></div> " + content + "</li>";
  }

  list = list + "</ul>";
  document.getElementById("questionList").innerHTML = list;
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
  if(tagList[tag] == undefined || tagList[tag] ==null) {
    console.log("Error: No tag found!");
    document.getElementById("data-chart1").setAttribute("data-percent", 92);
    document.getElementById("data-chart2").setAttribute("data-percent", 65);
    document.getElementById("data-chart-header1").innerHTML = "<h4>Questions for <strong>JAVA</strong> tag</h4>";
    document.getElementById("data-chart-header2").innerHTML = "<h4>Unanswered questions for <strong>JAVA</strong> tag</h4>";
    return;
  }
  document.getElementById("data-chart1").setAttribute("data-percent", tagList[tag].questionPercent);
  document.getElementById("data-chart2").setAttribute("data-percent", tagList[tag].unansweredQuestionPercent);
  document.getElementById("data-chart-header1").innerHTML = "<h4>Questions for <strong>"+tag+"</strong> tag</h4>";
  document.getElementById("data-chart-header2").innerHTML = "<h4>Unanswered questions for <strong>"+tag+"</strong> tag</h4>";
}


/********************CALLBACK FUNCTIONS****************/
/*
** checkbox onclick for question type control
*/
function questionOnClick(question) {
   if(question.classList.contains('selected')) {
     question.classList.remove('selected');
   }
   question.classList.add('selected');
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
