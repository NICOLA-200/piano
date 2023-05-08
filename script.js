const pianoKeys =  document.querySelectorAll(".piano-keys .key")

const audio = new Audio("tunes/a.wav")

const playTune = (key) => {
     audio.src =`tunes/${key}.wav`
     audio.play();
}

pianoKeys.forEach (key => {
     console.log(key.dataset.key);
})


const pressedKey = (e) => {
      console.log(e);
}

document.addEventListener("keydown", pressedKey)



