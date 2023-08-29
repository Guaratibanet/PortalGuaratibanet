//import GuaratibaNet from '../javascript/script.js'

class SearchList {

    constructor() {

        this.pSearch = document.querySelector ("#p-search-id")

        this.jsonTest = '{ "search": { "title":"Horários de Atendimento","description":"Horário de atendimento dos setores da GuaratibaNet e da loja", "tags":"horario, lojas","link":"https://guaratibanet.github.io/PortalGuaratibanet/pages/index-horarios.html" } }'

        this.jsonValue = JSON.parse(this.jsonTest)

        console.log (this.jsonValue.search)
        //console.log (this.inputSearchValue)

        this.searchFunc()

    }

    searchFunc() {

        this.pSearch.innerHTML = `<a href="#">${this.jsonValue.search.title}</a></br>`
        this.pSearch.innerHTML += `${this.jsonValue.search.description}</br>`
        this.pSearch.innerHTML += `</br>`

        this.pSearch.innerHTML += `<a href="#">${this.jsonValue.search.title}</a></br>`
        this.pSearch.innerHTML += `${this.jsonValue.search.description}</br>`
        this.pSearch.innerHTML += `</br>`

    }

}

let searchList = new SearchList()