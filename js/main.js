// format the portfolio box
document.querySelectorAll(".portfolio .holder .box").forEach(box => {
    box.addEventListener("mouseenter",() => {
        box.querySelector(".info").classList.add("active");
    })
    box.addEventListener("mouseleave",() => {
        box.querySelector(".info").classList.remove("active");
    })
});

//format the header ul 
document.querySelector("header .container .fa-bars").addEventListener("click",() => {
    document.querySelector("header nav ul ").classList.toggle("open");
});

document.querySelectorAll("header nav ul li a").forEach(li => {
    li.addEventListener("click",()=>{
        document.querySelector("header nav ul").classList.remove("open");
    })
})