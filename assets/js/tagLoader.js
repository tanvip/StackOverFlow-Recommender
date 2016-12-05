var tagListLength=tagList.length;

function addRemoveTag (s){
  var tagName=[];
  tagName[s]="Edit Here";
  if(s in tagList){
    delete tagList[s];
    renderTags();
  }
  else{
    $.extend(tagList, tagName);
  renderTags();
  }
  tagListLength=tagList.length;
}
