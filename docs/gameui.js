class GameUI {
   #doms;

   constructor() {
      const view = document.getElementById("modal");

      this.#doms = {
         settingsBtn: document.getElementById("settings-btn"),
         closeBtn: view.querySelector(".close"),

         modalView: view
      };

      this.#doms.settingsBtn.addEventListener("click", () => this.#open());

      this.#doms.closeBtn.addEventListener("click", () => this.#close());

      window.addEventListener("click", (e) => {
         if (e.target === this.#doms.modalView) {
            this.#close();
         }
      });
   }

   #open() {
      this.#doms.modalView.style.display = "block";
   }

   #close() {
      this.#doms.modalView.style.display = "none";
   }
}