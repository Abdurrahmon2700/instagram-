let list = document.querySelector('.main__list')
let modalWrap = document.querySelector('#exampleModalToggle')
let likebtn = document.querySelector ('#likebtn')
let likebtnclass = document.querySelectorAll('.bx-heart')
let footercount = document.querySelector("#footer-count")

let count = 0
let count2 = eval( footercount.innerHTML )
likebtn.addEventListener('click',(e) => {
  likebtnclass.forEach((item) => {
    if (count % 2 == 0) {
      item.style.color = "red"
      likebtn.innerHTML = `<i class='bx bxs-heart' ></i>`
      footercount.innerHTML = count2 + 1 
    }
    else if (count % 2 != 0) {
      likebtn.innerHTML = `<i class='bx bx-heart' ></i>`
      footercount.innerHTML = count2 
    }
  })
  count++
  
})


instagramContentBox.forEach(function(instagramContentBox) {
  let newLi = document.createElement('li')
  newLi.innerHTML = ` 
      <li class="main__item col-lg-4 col-md-4 col-sm-4">
      <div class="item__box">
      <button class="item__wrap" data-bs-toggle="modal" href="#exampleModalToggle" role="button"></button>
        <object class="main__img" data="${instagramContentBox.media}">1</object>
        <div class="main__btnpart">
        <button><i class='bx bxs-heart'>${instagramContentBox.like}</i></button>
        <button><i class='bx bxs-message-rounded-dots'>${instagramContentBox.comment}</i></button>
      </div>
      </div>
    </li>`
    list.appendChild(newLi)
});

let modalLeft = document.querySelector ('.modal__left')
let modalRight = document.querySelector ('.modalright')
function buttons () {
  let modalView = document.querySelectorAll('.item__wrap')
 
  for (let i = 0; i < modalView.length; i++){
    modalView[i].addEventListener('click', (e)=> {
      let id = e.target.id
      let modalid = instagramContentBox.filter(e => e.id =! id) 
      modalLeft.data = modalid[i].media
    })
  }
}
buttons()



let div = document.createElement('div')
div.innerHTML = `<div class="user__name">
<img class="modal__right-img" src="img/imgborde.jpg" alt="">
<span>muhammadali_eshonqulov</span>
</div>
<div class="main__modal">
<div class="user__name">
  <img class="modal__right-img" src="img/imgborde.jpg" alt="">
  <span>muhammadali_eshonqulov</span>
  <p class="comment">"Yuksalish" Madinai Munavvarada😊😊😊

    ROBBIM barchamizni tez fursatlarda shu go'zal shaharga yetkazsin.
    
    Rasm uchun @ibrohim_muhammad_84 akamga tashakkur izhor qilaman.
    <a href="https://www.instagram.com/Yuksalish_leaders_academy/">@Yuksalish_Leaders_Academy
    </a>
  </p>
</div>
<div class="plus"><i class='bx bx-plus-circle' ></i></div>
<div class="user__name">
  <img class="modal__right-img" src="img/zabar.jpg" alt="">
  <span>zabardastovna</span>
</div>
<div class="user__name">
  <img class="modal__right-img" src="img/sattor.jpg" alt="">
  <span>abdusattor_ibroximov</span>
</div>
<div class="user__name">
  <img class="modal__right-img" src="img/bilol.jpg" alt="">
  <span>bilol_2704</span>
</div>
<div class="user__name">
  <img class="modal__right-img" src="img/scromny.jpg" alt="">
  <span>scromny_01</span>
</div>
<div class="user__name">
  <img class="modal__right-img" src="img/sattor.jpg" alt="">
  <span>abdusattor_ibroximov</span>
</div>
<div class="user__name">
  <img class="modal__right-img" src="img/bilol.jpg" alt="">
  <span>bilol_2704</span>
</div>
<div class="user__name">
  <img class="modal__right-img" src="img/scromny.jpg" alt="">
  <span>scromny_01</span>
</div>
<div class="user__name">
  <img class="modal__right-img" src="img/sattor.jpg" alt="">
  <span>abdusattor_ibroximov</span>
</div>
<div class="user__name">
  <img class="modal__right-img" src="img/bilol.jpg" alt="">
  <span>bilol_2704</span>
</div> <div class="user__name">
  <img class="modal__right-img" src="img/scromny.jpg" alt="">
  <span>scromny_01</span>
</div>
<div class="user__name">
  <img class="modal__right-img" src="img/sattor.jpg" alt="">
  <span>abdusattor_ibroximov</span>
</div>
<div class="user__name">
  <img class="modal__right-img" src="img/bilol.jpg" alt="">
  <span>bilol_2704</span>
</div>
<div class="user__name">
  <img class="modal__right-img" src="img/scromny.jpg" alt="">
  <span>scromny_01</span>
</div>
</div>`
modalRight.appendChild(div)
