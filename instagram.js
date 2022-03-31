let list = document.querySelector('.main__list')
instagramContentBox.forEach(function(instagramContentBox) {
  let newLi = document.createElement('li')
  newLi.innerHTML = ` 
      <li class="main__item col-lg-4 col-md-4 col-sm-4">
      <div class="item__box">
        <img class="main__img" src="${instagramContentBox.media} " alt="">
        <div class="main__btnpart">
          <button>${instagramContentBox.comment}</button>
          <button>${instagramContentBox.like}</button>
        </div>
      </div>
    </li>`
    list.appendChild(newLi)
});
