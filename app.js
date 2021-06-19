const hour = document.getElementById('hour')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const button = document.getElementById('start-timer')

const count = document.getElementsByClassName('personal-count')[0]

window.addEventListener('load', function(){
  const personalLocalCount = localStorage.getItem('personal-count')  
  if (!personalLocalCount) {
    localStorage.setItem('personal-count', '0')
  }  

  count.innerHTML = parseInt(localStorage.getItem('personal-count'))
})

function setTimer(int) {
  const rightNow = new Date()
  let countdown = int * 60 * 1000 // Cuanto ms quiero que transcurran
  const countDownTo = new Date(rightNow.getTime() + countdown).getTime() // la fecha de hoy + el tiempo que busco

  const timer = setInterval(function () {
    let timeNow = new Date().getTime() // La fecha al momento preciso
    let distance = countDownTo - timeNow

    minutes.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    seconds.innerHTML = Math.floor((distance % (1000 * 60)) / 1000)    

    if (distance < 0) {
      clearInterval(timer)
      const personalLocalCount = parseInt(localStorage.getItem('personal-count'))
      localStorage.setItem('personal-count', personalLocalCount + 1)
      minutes.innerHTML = 00
      seconds.innerHTML = 00    
      count.innerHTML = parseInt(localStorage.getItem('personal-count'))
    }

  }, 1000)
}

button.addEventListener('click', function() { setTimer(25) })