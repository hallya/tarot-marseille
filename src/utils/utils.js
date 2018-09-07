import { miroirs } from './miroirsdb';
import { Voies, Boucles } from './voies-boucles-db';

const reduceNumber = (num) => {
  let decimals = []
  for (let i = 0; i < num.toString().length; i++) {
    decimals.push(Number(num.toString().charAt(i)))
  }
  return decimals.reduce((acc, cur) => acc + cur)
}

const reduceNumberIfNecessary = (num, target) => {
  if (num === 0) {
    return 22;
  }
  if (num <= target) {
    return num;
  }
  let reduced = reduceNumber(num);
  return reduced <= target ? reduced : reduceNumber(reduced);
}

const checkMat = (num1, num2) => num1 - num2 < 0 ? (num1 - num2) * -1 : num1 - num2

const reducerOrNot = (year) => {
  let reduced = reduceNumber(year);
  if (reduced < 10 || reduced === 11 || reduced === 22) return reduced;
  return reduceNumber(reduced) 
}

export const getHouses = (state) => {   
  let { day, month, year, dayPartner, monthPartner, yearPartner, currentYear } = state,
    date = new Date();
  let customCurrentYear = currentYear === 0 ? date.getFullYear() : currentYear,
    dayPartnerOrNone = dayPartner ? reduceNumberIfNecessary(dayPartner, 22) : 0,
    monthPartnerOrNone = monthPartner ? reduceNumberIfNecessary(monthPartner, 22) : 0,
    yearPartnerOrNone = yearPartner ? reduceNumberIfNecessary(yearPartner, 22) : 0,
    m4Partner = yearPartner ? reduceNumberIfNecessary(dayPartnerOrNone + monthPartnerOrNone + yearPartnerOrNone, 22) : 0;
  
  day = day ? day : 0;
  month = month ? month : 0;
  year = year ? year : 0;

  const
    m1 = reduceNumberIfNecessary(reduceNumberIfNecessary(day, 22) + dayPartnerOrNone, 22),
    m2 = reduceNumberIfNecessary(reduceNumberIfNecessary(month, 22) + monthPartnerOrNone, 22),
    m3 = reduceNumberIfNecessary(reduceNumberIfNecessary(year, 22) + yearPartnerOrNone, 22),
    m4 = reduceNumberIfNecessary(reduceNumberIfNecessary(day + month + year, 22) + m4Partner, 22),
    m5 = reduceNumberIfNecessary(m1 + m2 + m3 + m4, 22),
    m6 = reduceNumberIfNecessary(m1 + m2, 22),
    m7 = reduceNumberIfNecessary(checkMat(m3, m2), 22),
    m8 = reduceNumberIfNecessary(m6 + reducerOrNot(customCurrentYear), 22),
    m9 = reduceNumberIfNecessary(m6 + m7, 22),
    m10 = reduceNumberIfNecessary(22 - m9, 22),
    m11 = reduceNumberIfNecessary(m3 + m7 + m10, 22),
    m12 = reduceNumberIfNecessary(m4 + m2 + m6, 22),
    m13 = reduceNumberIfNecessary(m11 + m3 + m5 + m1 + m12 + m9 + m2 + m5 + m4, 22),
    m14 = reduceNumberIfNecessary(m1 + m2 + m3 + m4, 56),
    firstSetHouses = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12],
    secondSetHouses = [m13, m14];
  
  return { m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, firstSetHouses, secondSetHouses };
}

const getMatchs = (a, b, houses) => {
  const housesNames = Object.keys(houses);
  const selectedHouses = housesNames.filter(key => houses[key] === a || houses[key] === b);
  const combinaisons = [];
  selectedHouses.forEach((house, index, array) => {
    const numHouse = house.match(/\d+/)[0];
    array.forEach(element => {
      const numElement = element.match(/\d+/)[0];
      const tempCombinaison = `Maison ${numHouse} & Maison ${numElement}`;

      if (element !== house
        && houses[element] !== houses[house]
        && numHouse > numElement
        && combinaisons.indexOf(tempCombinaison) === -1) { 
        combinaisons.push(tempCombinaison);
      }
    })
  })
  return combinaisons;
}

const getMiroirImages = (reference) => {
  if (reference.length > 3) {
    return [Number(reference.slice(0,2)), Number(reference.slice(2))]
  }
  else {
    return [Number(reference.slice(0,1)), Number(reference.slice(1))]
  }
}

const combinaisonDoesntExist = (a, b, num, combinaisons, title, reversedTitle) => a + b === num && (combinaisons.indexOf(title) === -1 || combinaisons.indexOf(reversedTitle) === -1)

export const getMiroirs = (state) => {
  const { m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13 } = state,
    houses = { m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13 };
  let sortedHouses = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13].sort((a, b) => a - b),
    miroir13 = [],
    miroir17 = [],
    miroir22 = [],
    existingCombinaisons = [];
  
  sortedHouses.forEach((a, index, array) => {
    array.forEach(b => {
      if (12 > a > 0  && b !== array[index]) {
        const title = a.toString() + b.toString(),
        reversedTitle = b.toString() + a.toString();
        if (combinaisonDoesntExist(a, b, 13, existingCombinaisons, title, reversedTitle)) {
          miroir13.push({
            title: miroirs[title].title,
            images: getMiroirImages(title),
            combinaisons: getMatchs(a,b, houses)
          });
          existingCombinaisons.push(title, reversedTitle);
        }
        if (combinaisonDoesntExist(a, b, 17, existingCombinaisons, title, reversedTitle)) {
          miroir17.push({
            title: miroirs[title].title,
            images: getMiroirImages(title),
            combinaisons: getMatchs(a,b, houses)
          });
          existingCombinaisons.push(title, reversedTitle);
        }
        if (combinaisonDoesntExist(a, b, 22, existingCombinaisons, title, reversedTitle)) {
          miroir22.push({
            title: miroirs[title].title,
            images: getMiroirImages(title),
            combinaisons: getMatchs(a,b, houses)
          });
          existingCombinaisons.push(title, reversedTitle);
        }
      } 
    })
  })

  return { miroir13, miroir17, miroir22 };
}

export const getVoiesEtBoucles = ({m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14 }) => {
  const
    houses = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14].sort((a, b) => a - b),
    voiesDB = Object.assign({}, Voies),
    matchsVoies = [],
    matchsBoucles = [];
  
  houses.forEach(firstHouse => {
    for (let firstLevel in voiesDB) {
      if (Number(firstLevel) === firstHouse) {
        houses.forEach(secondHouse => {
          for (let secondLevel in voiesDB[firstLevel]) {
            if (Number(secondLevel) === secondHouse ) {
              houses.forEach(thirdHouse => {
                for (let thirdLevel in voiesDB[firstLevel][secondLevel]) {
                  if (Number(thirdLevel) === thirdHouse && matchsVoies.indexOf(voiesDB[firstLevel][secondLevel][thirdLevel]) === -1) { 
                    matchsVoies.push(voiesDB[firstLevel][secondLevel][thirdLevel]);
                  }
                }
              })
            }
          }
        })
      }
    }
  })
  for (let i = 0, count = 1; i < houses.length; i++) {
    if (count === 3) {
      matchsBoucles.push(Boucles[houses[i]])
    }
    houses[i] === houses[i + 1] ? count++ : count = 1
  }
  return {
    voies: matchsVoies,
    boucles: matchsBoucles
  }
}

export const getPersonnalYears = ( m6, birth ) => {
  let personnalYears = [],
    i = birth + 101;
  for (; birth < i; birth++) {
    personnalYears.push(reduceNumberIfNecessary(m6 + reducerOrNot(birth), 22))
  }
  return {personnalYears}
}