var tagListLength=tagList.length;

function addRemoveTag (s,size,unanswered,d){
  var tagName=[];
  var obj = {};
  obj["tag"]=s;
  obj["size"]=size;
  obj["unanswred"]=10;
  obj["node"]=d;
  tagName[s]=obj;
  if(s in tagList){
    delete tagList[s];
    renderTags();
  }
  else{
    $.extend(tagList, tagName);
    $.extend(tagList2, tagName);
  renderTags();
  }
  tagListLength=tagList.length;
}
