class Media {
    constructor(title,isCheckedOut){
        this._title = title;
        this._isCheckedOut = isCheckedOut;
        this._ratings = [] 
    }
    get title() {
        return this._title ; 
    }
    get isCheckedOut(){
        return this._isCheckedOut;
    }
    get ratings(){
        return this._ratings ; 
    }

    set isCheckedOut(value){
        this._isCheckedOut = value ; 
    }
    getAverageRating () {
         const sumOfRatings = this._ratings.reduce((acc , currval)=> {
             acc + currval 
         })
         const avreage = sumOfRatings / (this._ratings.length)
         return avreage ;
    }
    toggleCheckOutStatus (value ){
           this._isCheckedOut = !value
    }
    addRating(rating){
        this._ratings.push(rating)
    }
}
class Movie extends Media {
    constructor (director,title,runTime,isCheckedOut) {
        super(title,isCheckedOut);
        this._director = director;
        this._runTime = runTime ; 
    }
    get director () {
        return this._director ;
   }
   get runTime() {
       return this._runTime 
   }    
}
class Book extends Media {
    constructor(author , title , pages , isCheckedOut){
        super(title,isCheckedOut);
        this._author = author ; 
        this._pages = pages 
    }
    get author(){
        return this._author ; 
    }
    get pages () {
        return this.pages ; 
    }
}
class CD extends Media {
    constructor (artist, title , isCheckedOut , songs ) {
        super(title,isCheckedOut);
        this._artist = artist ; 
        this._songs = songs ; 
    }
    get artist () {
        return this._artist ; 
    }
    get songs () {
        return this._songs ; 
    }
}