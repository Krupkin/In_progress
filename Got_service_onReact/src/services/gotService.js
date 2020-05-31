    
    
    export default class GotSerice{
        constructor(){
            this._URL = "https://anapioficeandfire.com/api/"
        }

        // CHARACTER INFO

        async getResources(url) {
            const newFetch = await fetch(url)
                if(newFetch.status !== 200){
                    throw new Error (`We hawe a problem on fetching ${url}, recived ${newFetch.status}`)
                } else {
                    return await newFetch.json()
                }
        }

        chekData(data){
            if(!data){
                return "info not found"
            } else return data
        }

        getAllCharacters = async () => {
            const res = await this.getResources("https://anapioficeandfire.com/api/characters?page=3&pageSize=7")
                return res.map(elem => this._transformCharactersData (elem))
        }

        getCharacterById = async (id) => {
            const res = await this.getResources(`https://anapioficeandfire.com/api/characters/${id + 14}`)
            return this._transformCharactersData(res)
        }

        _transformCharactersData (data) {
            const newEl = {
                name: this.chekData(data.name),
                gender: this.chekData(data.gende),
                born: this.chekData(data.born),
                died: this.chekData(data.died),
                culture: this.chekData(data.culture)
            }
            return newEl
        }

        // _______________________________________________________________________________________________________


        getAllBooks = async () => {
            const res = await this.getResources("https://anapioficeandfire.com/api/books?page=1&pageSize=7")
                return res.map(elem => this._transformBookData (elem))
        }

        getBooksById = async (id) => {
            const res = await this.getResources(`https://anapioficeandfire.com/api/books/${id}`)
            return this._transformBookData(res)
        }

        _transformBookData (data) {
            const newEl = {
                name: this.chekData(data.name),
                isbn: this.chekData(data.isbn),
                publisher: this.chekData(data.publisher),
                released: this.chekData(data.released),
                numberOfPages: this.chekData(data.numberOfPages)
            }
            return newEl
        }

        // ____________________________________________________________________________________________________________


        getAllHouses = async () => {
            const res = await this.getResources("https://anapioficeandfire.com/api/houses?page=1&pageSize=7")
                return res.map(elem => this._transformHousesData(elem))
        }

        getHousesById = async (id) => {
            const res = await this.getResources(`https://anapioficeandfire.com/api/houses/${id}`)
            return this._transformHousesData(res)
        }

        _transformHousesData(data) {
            const newEl = {
                name: this.chekData(data.name),
                region: this.chekData(data.region),
                coatOfArms: this.chekData(data.coatOfArms),
                words: this.chekData(data.words)
            }
            return newEl
        }


    }
