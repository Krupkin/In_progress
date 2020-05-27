    
    
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

        async getAllCharacters () {
            const res = await this.getResources("https://anapioficeandfire.com/api/characters")
                return res.map(elem => this._transformCharactersData (elem))
        }

        async getCharacterById (id) {
            const res = await this.getResources(`https://anapioficeandfire.com/api/characters/${id}`)
            return this._transformCharactersData(res)
        }


        chekData(data){
            if(!data){
                return "info not found"
            } else return data
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
    }
