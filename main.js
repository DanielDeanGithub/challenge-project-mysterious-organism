// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, arr) => {
    return {
        _specimenNum: num,
        _dna: arr,
        get specimenNum() {
            return this._specimenNum;
        },
        set specimenNum(newNum) {
            this._specimenNum = newNum;
        },
        get dna() {
            return this._dna;
        },
        set dna(newdna) {
            this._dna = newdna;
        },
        mutate() {
            const rng = Math.floor(Math.random() * this.dna.length);
            const randomBase = this.dna[rng];
            let newBase = '';

            do {
                newBase = returnRandBase();
            } while (newBase === randomBase);

            this.dna[rng] = newBase;
        },
        compareDNA({dna}) {
            const dnaLength = this.dna.length;
            let matchTotal = 0;
            
            for(let i = 0; i < dnaLength; i++) {
                console.log('current dna base: ' + this.dna[i]);
                console.log('comparing dna base: ' + dna[i]);
                
                if(this.dna[i] === dna[i]) {
                    matchTotal++;
                    console.log('==== Base match ====')
                }            
            };

            console.log(matchTotal);

        }
    }
};

const test = pAequorFactory(1,mockUpStrand());
const test2 = pAequorFactory(2,mockUpStrand());

// console.log(test.specimenNum);
// console.log(test.dna);
// test.mutate();
// console.log(test.dna);

test.compareDNA(test2);

