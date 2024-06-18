



let res=document.querySelector(".responsive");
let openMenu=document.querySelector(".fa-bars");
let closeMenu=document.querySelector(".fa-x");

openMenu.addEventListener("click",()=>{
  res.classList.add("show")
})
closeMenu.addEventListener("click",()=>{
  res.classList.remove("show")
})
       


let nav=document.querySelector("nav")

window.onscroll=function(){
  if(window.pageYOffset>=50){
    nav.classList.add("active")
  }else{
    nav.classList.remove("active")
  }
}



function VanillaCounter() {
  let elements = document.querySelectorAll('[data-vanilla-counter]')
  elements.forEach(i => {
      let data = {
          startAt: parseInt(i.getAttribute('data-start-at')),
          endAt: parseInt(i.getAttribute('data-end-at')),
          delay: parseInt(i.getAttribute('data-delay')) || 0,
          format: '{}',
          time: parseInt(i.getAttribute('data-time')) || 1000
      }
      if (i.getAttribute('data-format')) {
          data.format = i.getAttribute('data-format')
      } else if (i.innerHTML != "") {
          data.format = i.innerHTML
      }
      console.log(data.format)
      if (data.startAt == null) {
          throw new Error('data-start-at attribute is required')
      }
      if (data.endAt == null) {
          throw new Error('data-end-at attribute is required')
      }
      var counter = data.startAt
      i.innerHTML = data.format.replace('{}', counter)
      var intervalTime = Math.ceil(data.time / (data.endAt - data.startAt))
      setTimeout(() => {
          var interval = setInterval(intervalHandler, intervalTime)
          function intervalHandler() {
              counter += (data.endAt - data.startAt) / Math.abs(data.endAt - data.startAt) * 1
              i.innerHTML = data.format.replace('{}', counter)
              if (counter == data.endAt) {
                  clearInterval(interval)
              }
          }
      }, data.delay)
  })
}




const menu=[
  {
      image:"img/item-1.jpeg",
      title:"Buttermilk Pancakes",
      price:"$22.5",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      category:"breakfast"
  },
  {
    image:"img/menu-7.jpg",
    title:"Pizza",
    price:"$80",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category:"dinner"
  },
  {
    image:"img/item-2.jpeg",
    title:"Country Delight",
    price:"$10.25",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category:"breakfast"
},
{
  image:"img/item-4.jpeg",
  title:"Diner Double",
  price:"$50",
  desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  category:"lunch"
},
{
  image:"img/menu-1.jpg",
  title:"sushi",
  price:"$100",
  desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  category:"dinner"
},
{
  image:"img/menu-5.jpg",
  title:"Bacon Overflow",
  price:"$30",
  desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  category:"breakfast"
},

{
  image:"img/menu-6.jpg",
  title:"french fries with meat",
  price:"$50",
  desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  category:"lunch"
},

{
  image:"img/menu-4.jpg",
  title:"steak",
  price:"$90",
  desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  category:"dinner"
},

]

let food=document.querySelector(".food")
let filterBtn=document.querySelectorAll(".filter-btn")


window.addEventListener("DOMContentLoaded",function(){
  DisplayGalleyItems(menu)
})

function DisplayGalleyItems(menuItems){
   let menuItem=menuItems.map(function(item){
      return `
      <div class=" wow fadeInUp dish" data-wow-duration="1s">
      <img src="${item.image}" alt="">
      <div class="desc">
        <div class="title">
          <h4>${item.title}</h4>
          <span>${item.price}</span>
        </div>
        <hr>
        <p>${item.desc}</p>
      </div>
    </div>`
   }).join("")
   food.innerHTML=menuItem
}

filterBtn.forEach(function(btn){
  btn.addEventListener("click",function(e){
      const category=e.currentTarget.dataset.category
      document.querySelector(".activ").classList.remove("activ")
      btn.classList.add("activ");
      const menuCategory=menu.filter(function(items){
          if(items.category===category){
              return items;
          }
      })
      if(category==="all"){
          DisplayGalleyItems(menu);
      }else{
          DisplayGalleyItems(menuCategory)
      }
  })
})


