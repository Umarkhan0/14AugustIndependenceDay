
let button = document.querySelector(".click-img");
button.addEventListener("click", () => {
  document.getElementById("box-hap").style.display = "none"
  document.querySelector(".animation1").style.width = "0px";
  document.querySelector(".animation2").style.width = "0px"
  let wellcome = document.getElementById("wellcom")
  wellcome.style.display = "block"
  setTimeout(() => {
    wellcome.innerHTML = `
<div class="container">
    <div class="card">
      <p class="name">Umar khan</p>
      <img height="40px" width="200px" src="./images/wish1 (2).png" alt="">
      <img class="happy-independence" height="200px" width="200px" src="./images/pk14.png" alt="">
      <div class="d-flex justify-content-around">
        <img height="200px" width="200px" src="./images/independence-day-min.png" alt="">
        <img height="150px" width="150px" class="man-pic img-fluid"  src="./images/pkmahan.gif" alt="">
      </div>
    </div></div>
    <div class="left-side">
      <marquee direction="up" scrolldelay="0">
        <div class="left-side-images">
          <img height="30px" src="./images/pm1-min.png" alt="">
          <img height="30px" src="./images/pm2-min.png" alt="">
          <img height="30px" src="./images/pn3-min.png" alt="">
          <img height="30px" src="./images/pn4-min.png" alt="">
          <img height="30px" src="./images/pm1-min.png" alt="">
          <img height="30px" src="./images/pm2-min.png" alt="">
          <img height="30px" src="./images/pn3-min.png" alt="">
          <img height="30px" src="./images/pn4-min.png" alt="">
        </div>
      </marquee>
      </div>
    <div class="right-side">
    <marquee behavior="scroll" direction="down" scrolldelay="0">
      <div class="left-side-images">
        <img height="30px" src="./images/pm1-min.png" alt="">
        <img height="30px" src="./images/pm2-min.png" alt="">
        <img height="30px" src="./images/pn3-min.png" alt="">
        <img height="30px" src="./images/pn4-min.png" alt="">
        <img height="30px" src="./images/pm1-min.png" alt="">
        <img height="30px" src="./images/pm2-min.png" alt="">
        <img height="30px" src="./images/pn3-min.png" alt="">
        <img height="30px" src="./images/pn4-min.png" alt="">
      </div>
    </marquee>
    </div>
  <!-- </div> -->
  <center>
  <div class="maim-con">
    <input type="text" maxlength="10" class="name-inter" placeholder="👉 Enter Your Name Here..">
    <div class="button" id="but-name">
      👉 Go
  </div>
  </div>
  </center>
  <div class="sound"></div>
  <iframe width="0" height="0" src="https://www.youtube.com/embed/k4VivDkES2s?rel=0&amp;autoplay=1" allow='autoplay' </iframe>
  
`
let song = document.querySelector(".sound");
setInterval(()=>{
  song.innerHTML = `
  <iframe width="0" height="0" src="https://www.youtube.com/embed/k4VivDkES2s?rel=0&amp;autoplay=1" allow='autoplay' </iframe>
  `
  console.log("chal gya")
},62000)

    let name = document.querySelector(".name");
    console.log(window.location.host)
    let wins = window.location.href
    let findLast = wins.indexOf("=")
    let fineInde = wins.indexOf("?");
    fineInde++
    let final = wins.slice(fineInde, findLast)
    let findSpace = wins.indexOf("+");
    let finalyRes = `${wins.slice(fineInde, findSpace)} ${wins.slice(findSpace + 1, findLast)}`
    console.log(`${wins.slice(fineInde, findSpace)}`)
    let inputs = wins.slice(fineInde, findSpace)
    if (finalyRes == `${inputs} http://${window.location.host}/?${inputs}`) {
      name.textContent = `${wins.slice(fineInde, findSpace)}`
    } else {


      name.textContent = finalyRes;
    }
    console.log(name.textContent)
    let getError = `http://${window.location.host} http://${window.location.host}`
    console.log(getError)
    if (name.textContent == getError) {
      name.textContent = 'Your Name'
    };
    let buttonSet = document.getElementById("but-name");
    let input = document.querySelector(".name-inter");
    buttonSet && buttonSet.addEventListener('click', (event) => {
      event.preventDefault();
      let name = document.querySelector(".name");
      var searchParams = new URLSearchParams(input.value.trim());
      if (input.value.trim()) {
        history.pushState({}, '', '?' + searchParams.toString())
        input.value = ""
        let name = document.querySelector(".name");
        let wins = window.location.href
        let findLast = wins.indexOf("=")
        let fineInde = wins.indexOf("?");
        fineInde++
        let final = wins.slice(fineInde, findLast)
        let findSpace = wins.indexOf("+");
        let finalyRes = `${wins.slice(fineInde, findSpace)} ${wins.slice(findSpace + 1, findLast)}`
        console.log(`${wins.slice(fineInde, findSpace)}`)
        let inputs = wins.slice(fineInde, findSpace)
        if (finalyRes == `${inputs} http://${window.location.host}/?${inputs}`) {
          name.textContent = `${wins.slice(fineInde, findSpace)}`
        } else {


          name.textContent = finalyRes;
        }
        input.style.display = "none";
        buttonSet.style.display = "none"
        document.querySelector(".maim-con").innerHTML = `
        <a class="sent-watts" href="https://api.whatsapp.com/send?text=Check%20out%20this%20link%20${encodeURIComponent(window.location.href.trim())}" target="_blank">
<div class="watssBtn">
<img height="30px" src="./images/wp.svg"/>
<span>Click here to Share on WhatsApp</span> 
<img height="30px" src="./images/wp.svg"/>
</a>
`

      }
      else {
        input.style.border = "2px solid red"
      }

    });


  }, 2000)
})
// console.log(window.location.search)
// console.log(encodeURIComponent(window.location.href.trim()))
