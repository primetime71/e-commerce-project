function resetStyle() {
  let imgArr = document.querySelectorAll(".item-1,.item-2,.item-3");
  for (let i = 0; i < imgArr.length; i++) {
    imgArr[i].style = "display:block";
  }
}

function showItem1() {
  resetStyle();
  let imgArr = document.querySelectorAll(".item-2,.item-3");
  for (let i = 0; i < imgArr.length; i++) {
    // imgArr[i].style.display = "none";
    imgArr[i].style = "display:none";
  }
}

function showItem2() {
  resetStyle();
  let imgArr = document.querySelectorAll(".item-1,.item-3");

  for (let i = 0; i < imgArr.length; i++) {
    imgArr[i].style = "display:none";
  }
}

function showItem3() {
  resetStyle();
  let imgArr = document.querySelectorAll(".item-1,.item-2");
  for (let i = 0; i < imgArr.length; i++) {
    imgArr[i].style = "display:none ";
  }
}
