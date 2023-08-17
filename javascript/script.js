class GuaratibaNet {

    constructor() {

        this.inputSearch = document.querySelector ("#input-search-id")
        this.buttonSearch = document.querySelector ("#button-search-id")
        
        this.buttonSearch.addEventListener ("click", () => {
            this.searchFunc()
        })

        alert ("Manutenção: BSR048CX554 / BSR048CX555. Previsão: 18h")

    }

    searchFunc() {

        this.inputSearchValue = this.inputSearch.value

        if (this.inputSearchValue === '') {
            alert ("Insira os dados de pesquisa")
        } else {
            console.log (this.inputSearchValue)
            console.log (typeof this.inputSearchValue)
        }

        
    }

}


const guaratibaNet = new GuaratibaNet()
