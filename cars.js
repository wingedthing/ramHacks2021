const header = document.getElementById('header');
const watchlist = document.getElementsByClassName('car-div2');


window.onwheel = e => {
  if(e.deltaY >= 0){
    header.style.visibility ="hidden";
  } else {
    header.style.visibility ="visible";
  }
}
