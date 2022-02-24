const menu = ["About", "JS Website", "Jquery Website", "Isotope","Contact"];
const swiper = new Swiper("#wrap", {
    loop:false,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween:80,
    mousewheel:true,
    pagination:{
        el:".swiper-pagination",
        type:"bullets",
        clickable:true,
        renderBullet:function(index, className){
            return `<span class="${className}">${menu[index]}</span>`
        }
    }
    
});

const bgs = document.querySelectorAll(".bg li");
const navi = document.querySelectorAll(".swiper-pagination span");

next.addEventListener("click", activation);
prev.addEventListener("click", activation);
window.addEventListener("mousewheel", activation);
swiper.on("slideChangeTransitionEnd", activation);

for(let el of navi){
    el.addEventListener("click", e=>{
        const isOn = e.currentTarget.classList.contains(".swiper-pagination-bullet-active");
        if(isOn) return;
        swiper.on("slideChangeTransitionEnd", activation);
    })
}

function activation(){
    let item = document.querySelector(".swiper-slide-active");
    let i = item.getAttribute("data-custom-index");

    for(let el of bgs){
        el.classList.remove("on");
    }
    bgs[i].classList.add("on");
}

