const header = document.querySelector("#header");
let ticking = false

window.addEventListener("scroll", () =>{
  if(!ticking){
    window.requestAnimationFrame(() => {
      const scrollPos = window.scrollY

      if(scrollPos > 80){
        header.classList.add("on")
      } else if(scrollPos < 50) {
        header.classList.remove("on")
      }

      ticking=false
    })
    
    ticking=true
  }
})