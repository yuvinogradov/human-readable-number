module.exports = function toReadable (number) {
      const numbersTo99 = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety',
    }

    function numbersTo99Maker(){ 
     for (let i = 21; i<=99; i++){
     const tmpArr = i.toString().split('')
     if(tmpArr[1]!=0){
      numbersTo99[i] = `${numbersTo99[tmpArr[0]*10]}-${numbersTo99[tmpArr[1]]}`
     }
     }
    }

    function upToThousandToStr(num){
      let hundreds = Math.trunc(num/100)
      let rem = num - hundreds*100
      let res = ''
      if (hundreds >= 1) res = `${numbersTo99[hundreds]} hundred`

      //if(hundreds >= 1 && rem > 0) res = `${res} and ${numbersTo99[rem]}`
      if(hundreds >= 1 && rem > 0) res = `${res} ${numbersTo99[rem]}`
      if(hundreds === 0) res = `${numbersTo99[rem]}`

      return res
    }
    
    numbersTo99Maker()
    
    return upToThousandToStr(number)
   
}
