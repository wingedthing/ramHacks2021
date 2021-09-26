const header = document.getElementById('header');
const watchlistImg = document.getElementsByClassName('reserve');
const watchlist = document.getElementsByClassName('car-div2');


window.onwheel = e => {
  if(e.deltaY >= 0){
    header.style.visibility ="hidden";
  } else {
    header.style.visibility ="visible";
  }
}

watchlistImg[0].addEventListener("click", e => {
  watchlistImg[0].src = "../imgs/watched.jpg";
  console.log('clicked');
  console.dir(watchlistImg);

});

console.dir(watchlistImg);

