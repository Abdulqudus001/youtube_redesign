// var view = $("#my-videos");
var move = "100px";
var sliderLimit = -750;

const moveRight = (e) => {
  let view = $(e);
  view.stop(false,true)
  .animate({scrollLeft:"+="+move},{ duration: 200});
}

const moveLeft = (e) => {
  let view = $(e);
  view.stop(false,true)
  .animate({scrollLeft:"-="+move},{ duration: 200});
}
