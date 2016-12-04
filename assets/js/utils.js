function getFileFromTag(node,tag)
{
    var fileName = "";
    if(node.name == tag)
    {
        return tag;
    }
    children = node.children ? node.children : node._children;
    if(children)
    {
        children.forEach(function(d){
            var retName = getFileFromTag(d,tag);
            if(retName.length > 0)
            {
                if(node == root)
                {
                    fileName = retName;
                }
                else
                {
                    fileName = node.name + "-" + retName;
                }
                return fileName;
            }
        });
    }
    return fileName;
}
