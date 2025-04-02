 export const Error = {
  Error: document.querySelector(".alert-error"),

  open() {
    Error.Error.classList.add("open")
  },
  close() {
    Error.Error.classList.remove("open")
  }
 }