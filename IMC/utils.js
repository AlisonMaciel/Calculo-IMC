import { input_height, input_weight } from "./script.js"

export function notANumber (value) {
  return isNaN(value) || value == ""
}

export function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(0)
}

export function ClearInputs () {
  input_height.value = ""
  input_weight.value = ""
}