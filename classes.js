class Player {
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.balloonCount = 100;
    }
    status() {
      console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`)
    }
  }
  const balloonAttack = (player1, player2) => {
   
    if (player1.hitsPerMinute > player2.hitsPerMinute) {
      return player1.name;
    }else if (player2.hitsPerMinute > player1.hitsPerMinute)
      return player2.name
  
    return 'Tie'
  }
const p1 = new Player('p1', 5);
const p2 = new Player('p2', 2);

console.log(balloonAttack(p1,p2))
 class ShiftCipher {
     constructor(shift){
         this.shift = shift ; 
     }
    encrypt(string){
        let capitalizedString = string.toUpperCase();
        let arr = capitalizedString.split('')
        let arr2 = arr.map(e=> e.codePointAt(0))
        let arr3 = arr2.map(e => { 
            if (e>= 65 && e <= 90) {
                if ( e + this.shift > 90 ) {
                    e = (e-26) + this.shift 
                    return e 
                } else {
                    return e + this.shift
                }
            } else {
                return e 
            }
        })
        let arr4 = arr3.map(e => String.fromCharCode(e))
        let result = arr4.join('')
        return result

    }
    decrypt(string){
        let lowerCaseString = string.toLowerCase();
        let ar = lowerCaseString.split('')
        let ar2 = ar.map(e=> {
            return e.codePointAt(0)})
        let ar3 = ar2.map(e => { 
            if (e>= 97 && e <= 122) {
                if ( e - this.shift < 97 ) {
                    e = (e+26) - this.shift 
                    return e 
                } else {
                    return e - this.shift
                }
            } else {
                
                return e 
            }
    })
        let ar4 = ar3.map(e => String.fromCharCode(e))
        let resul = ar4.join('')
        return resul

 }}
 const hamza = new ShiftCipher(2);
 console.log(hamza.decrypt('K <3 OA RWRRA'))
 console.log(hamza.encrypt('hamz3a'))
