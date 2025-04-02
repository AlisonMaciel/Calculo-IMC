const button = document.querySelector("form button")
const modal_button = document.querySelector(".modal-wrapper button")

  const openModal = event => { 
  
  event.preventDefault() 

  const input_weight = document.querySelector("form #weight").value
  const input_height = document.querySelector("form #height").value

  const modal = document.querySelector(".modal-wrapper")
  const modal_title = document.querySelector(".modal-wrapper .title")
  const alert_error = document.querySelector(".alert-error")
  const alert_error_p = document.querySelector(".alert-error p")
  
 if (!isNaN(input_height) && !isNaN(input_weight) && input_height > 0 && input_weight > 0) {
    const IMC = (input_weight / ((input_height / 100)** 2)).toFixed(0)
     modal.classList.add("open")
     if(IMC > 25) {
       modal_title.innerHTML = `Seu IMC é de ${IMC} precisa emagrecer`
       alert_error.classList.add("open")
       alert_error_p.innerHTML = "IMC normal é de 25"
     } 
     else {
      modal_title.innerHTML = `Seu IMC é de ${IMC}`
      alert_error.classList.add("open")
      alert_error_p.innerHTML = "Seu IMC está normal"
     }
  } 
  else if (input_height == "" && input_weight == "") {
    alert_error.classList.add("open")
    alert_error_p.innerHTML = "Preencha os campos"
    clearinputs()
  } 
  else if (input_height <= 0 && input_weight <= 0) {
    alert_error.classList.add("open")
    alert_error_p.innerHTML = "Digite números acima de 0"
    clearinputs()
  }
} 

const closeModal = () => {
  document.querySelector(".modal-wrapper").classList.remove("open")
  document.querySelector(".alert-error").classList.remove("open")
  clearinputs()
}

const clearinputs = () => {
  document.querySelector("form #weight").value = ""
  document.querySelector("form #height").value = ""
}

button.addEventListener("click", openModal)
modal_button.addEventListener("click", closeModal) 

import {Modal} from './modal.js'
import { Error } from './alertError.js'
import { IMC, notANumber, ClearInputs } from './utils.js'

const form = document.querySelector("form")
export const input_weight = document.querySelector("#weight")
export const input_height = document.querySelector("#height")


form.onsubmit = (event) => {
  event.preventDefault()

  const weight = input_weight.value
  const height = input_height.value
  
  const result = IMC(weight, height)
  const alertError = notANumber(weight) || notANumber(height)
  
  if (alertError) {
   Error.open()
   ClearInputs()
    return
  }
  
  Modal.open()
  Error.close()
  ClearInputs()
  Modal.message.innerText = `Seu IMC é de ${result}`
 
}

input_height.oninput = () => Error.close()

input_weight.oninput = () => Error.close()
