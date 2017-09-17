// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(cname, ele
) {
  var ret = [];
  if (ele === undefined) {
    ele = document.body;
  }
  //?returns DOM tokenlist? Look that up.
  var classList = ele.classList;
  if (classList && classList.length > 0) {
    // console.log(ele, classList);
    for (var i = 0; i < classList.length; i++) {
        //in case class is repeated in list for element
        if(classList[i] == cname) {
            // console.log('HIT');
            ret.push(ele);
            //already found what I want. Irish exit.
            break;
        }
    }
  }
  if (ele.childNodes.length > 0) {
    for (var i = 0; i < ele.childNodes.length; i++) {
        ret = ret.concat(getElementsByClassName(cname, ele.childNodes[i]));
    }
  }
  return ret;
};