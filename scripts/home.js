const text= "future Full Stack Developer"
let index= 0
let speed = 100
let deleting = false

function typeWriter() {

  const element = document.getElementById("text")

  if(!deleting){
    if(index < text.length){
      element.textContent += text.charAt(index)
      index++
      setTimeout(typeWriter, speed)
    }else{
      setTimeout(() => {
        deleting=true
        typeWriter()
      }, 1000)
    }
  }else{
    element.textContent = text.substring(0, index-1)
    index--
    if(index>0) {
      setTimeout(typeWriter, speed)
    }else{
      deleting=false
      setTimeout(typeWriter, 500)
    }
  }
  
}

typeWriter()