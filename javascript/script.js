class GuaratibaNet {

    constructor() {

        this.buttonSearch = document.querySelector ("#button-search-id")
        
        this.buttonSearch.addEventListener ("click", () => {
            this.searchFunc()
        })

    }

    searchFunc() {
        location.href = "pages/index-searchlist.html"
        
    }

}
