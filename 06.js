  var myRectangle = {

    // coordinates of bottom-left corner
    leftX: 2,
    bottomY: 2,

    // width and height
    width: 2,
    height: 2,

};

  var rectangle2 = {

    // coordinates of bottom-left corner
    leftX: -1,
    bottomY: 1,

    // width and height
    width: 4,
    height: 2,

};

function intersection(rect1, rect2) {
  var rect1RightX = rect1.leftX + rect1.width;
  var rect1TopY = rect1.bottomY + rect1.height;

  var rect2RightX = rect2.leftX + rect2.width;
  var rect2TopY = rect2.bottomY + rect2.height;

  if(rect1TopY > rect2.bottomY && rect1RightX < rect2.leftX) {
    console.log('overlap')
  }

};

console.log(intersection(myRectangle, rectangle2))

