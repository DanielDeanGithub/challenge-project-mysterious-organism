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
            let matchPercent = 0;
            
            for(let i = 0; i < dnaLength; i++) {                
                if(this.dna[i] === dna[i]) {
                    matchTotal++;
                }            
            };
            
            matchPercent = ((matchTotal / dnaLength) * 100).toFixed(2);
            console.log(`specimen #1 and specimen #2 have ${matchPercent}% DNA in common`);
        },
        willLikelySurvive() {
            let surviveMatch = 0;

            for(const base of this.dna) {
                if(base === 'C' || base === 'G') {
                    surviveMatch++;
                }
            }

            return ((surviveMatch / this.dna.length) * 100).toFixed(2) > 60;
        },
        complementStrand() {
            const complementStrandArr = [];

            this.dna.forEach(e => {
                switch (e) {
                  case "A":
                    complementStrandArr.push("T");
                    break;
                  case "T":
                    complementStrandArr.push("A");
                    break;
                  case "C":
                    complementStrandArr.push("G");
                    break;
                  case "G":
                    complementStrandArr.push("C");
                    break;
                  default:
                    console.log("Error: invalid input");
                }
            });

            return complementStrandArr;
        }
    }
};

const pAequorArray = [];

while (pAequorArray.length < 30) {
    pAequorArray.push(pAequorFactory(pAequorArray.length + 1,mockUpStrand()));
}

const mostRelatedpAequor = [];

for (let i = 0; i < pAequorArray.length; i++) {

};













// const test = pAequorFactory(1,mockUpStrand());
// const test2 = pAequorFactory(2,mockUpStrand());

// console.log(test.specimenNum);
// console.log(test.dna);
// test.mutate();
// console.log(test.dna);

// test.compareDNA(test2);

// console.log(test.willLikelySurvive());

// console.log(pAequorArray);

// console.log(test.dna);
// console.log(test.complementStrand());


