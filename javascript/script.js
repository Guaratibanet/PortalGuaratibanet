export default class GuaratibaNet {

    constructor() {

        this.inputSearch = document.querySelector ("#input-search-id")
        this.buttonSearch = document.querySelector ("#button-search-id")
        
        this.buttonSearch.addEventListener ("click", () => {
            this.searchFunc()
        })

        //alert ("Manutenção: BSR048CX554 / BSR048CX555. Previsão: 18h")

    }

    searchFunc() {

        this.inputSearchValue = this.inputSearch.value
        this.inputSearchValue = this.inputSearchValue.trim()

        if (this.inputSearchValue === '') {
            alert ("Insira as informações no campo de busca")
            this.inputSearch.value = ""
        } else {
            console.log (this.inputSearchValue)
            //window.location.href = "pages/index-searchlist.html"
        }

        
        
    }

}


const guaratibaNet = new GuaratibaNet()
