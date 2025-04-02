export const Modal = {

  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal-wrapper .modal-card .title"),
  buttonClose: document.querySelector(".modal-wrapper .modal-card button "),

  open() {
    Modal.wrapper.classList.add("open")
  },

  close() {
    Modal.wrapper.classList.remove("open")
  }

}

Modal.buttonClose.onclick = () =>  Modal.close()




