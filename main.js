import './style.css';


const playBtn = document.querySelector("#playBtn");
const song = document.querySelector('#song');
const changeIcon = document.querySelector('#changeIcon');
const circle = document.querySelector('.circle');
const changeList = document.querySelector("#changeList");
const list = document.querySelector("#list");
const heart = document.querySelector("#heart");
const love = document.querySelector("#love");
const sideBarBtn = document.querySelector("#sideBarBtn");

sideBarBtn.addEventListener("click",() => {
    // console.log("click sidebar");
})

// console.dir(song);

playBtn.addEventListener("click",() => {
    // console.log("U play");
    // song.play();
    if(changeIcon.classList.contains("fa-pause")){
        song.pause();
        circle.classList.remove("rotate");
        changeIcon.classList.remove("fa-pause");
        changeIcon.classList.add("fa-play");

    }else{
        song.play();
        circle.classList.add("rotate");
        changeIcon.classList.add("fa-pause");
        changeIcon.classList.remove("fa-play");   

    }
});

song.addEventListener("ended",() => {
    changeIcon.classList.remove("fa-pause");
    changeIcon.classList.add("fa-play");   
});

changeList.addEventListener("click",() => {
    if(list.classList.contains("fa-repeat")){
        list.classList.remove("fa-repeat");
        list.classList.add("fa-shuffle");
    }else{
        list.classList.add("fa-repeat");
        list.classList.remove("fa-shuffle");
    }
});

heart.addEventListener("click",() => {
    if(love.classList.contains("fa-regular","fa-heart")){
        love.classList.remove("fa-regular","fa-heart"); 
        love.classList.add("fa-solid","fa-heart");
    }else{
        love.classList.remove("fa-solid","fa-heart");
        love.classList.add("fa-regular","fa-heart"); 
    }

})

