import { miroirs } from './miroirsDB';
import { cheminsDB, triadesDB } from './chemins-triadesDB';

const sumDecimals = (num) => {
  let decimals = [];
  for (let i = 0; i < num.toString().length; i++) {
    decimals.push(Number(num.toString().charAt(i)));
  }
  return decimals.reduce((acc, cur) => acc + cur);
};

const reduceNumberIfNecessary = (num, target) => {
  if (num === 0) {
    return 22;
  }
  if (num <= target) {
    return num;
  }
  let reduced = sumDecimals(num);
  return reduced <= target ? reduced : sumDecimals(reduced);
};

const checkMat = (num1, num2) =>
  num1 - num2 < 0 ? (num1 - num2) * -1 : num1 - num2;

const reduceYear = (year) => {
  let reducedYear = sumDecimals(year);
  if (reducedYear < 10 || reducedYear === 11 || reducedYear === 22) {
    return reducedYear;
  }
  return reduceYear(reducedYear);
};

export const getHouses = (state) => {
  let {
    day = 0,
    month = 0,
    year = 0,
    dayPartner,
    monthPartner,
    yearPartner,
    currentYear,
  } = state;

  const reducedDay = reduceNumberIfNecessary(day, 22);
  const reducedMonth = reduceNumberIfNecessary(month, 22);
  const reducedYear = reduceNumberIfNecessary(year, 22);
  const sumDayMonthYear = day + month + year;
  const reducedM4 = reduceNumberIfNecessary(sumDayMonthYear, 22);

  const reducedDayPartner = dayPartner
    ? reduceNumberIfNecessary(dayPartner, 22)
    : 0;
  const reducedMonthPartner = monthPartner
    ? reduceNumberIfNecessary(monthPartner, 22)
    : 0;
  const reducedYearPartner = yearPartner
    ? reduceNumberIfNecessary(yearPartner, 22)
    : 0;
  const sumDayMonthYearPartner = dayPartner + monthPartner + yearPartner;
  const reducedM4Partner = yearPartner
    ? reduceNumberIfNecessary(sumDayMonthYearPartner, 22)
    : 0;

  const m1 = reduceNumberIfNecessary(reducedDay + reducedDayPartner, 22);
  const m2 = reduceNumberIfNecessary(reducedMonth + reducedMonthPartner, 22);
  const m3 = reduceNumberIfNecessary(reducedYear + reducedYearPartner, 22);
  const m4 = reduceNumberIfNecessary(reducedM4 + reducedM4Partner, 22);
  const m5 = reduceNumberIfNecessary(m1 + m2 + m3 + m4, 22);
  const m6 = reduceNumberIfNecessary(m1 + m2, 22);
  const m7 = reduceNumberIfNecessary(checkMat(m3, m2), 22);
  const m8 = reduceNumberIfNecessary(m6 + reduceYear(currentYear), 22);
  const m9 = reduceNumberIfNecessary(m6 + m7, 22);
  const m10 = reduceNumberIfNecessary(22 - m9, 22);
  const m11 = reduceNumberIfNecessary(m3 + m7 + m10, 22);
  const m12 = reduceNumberIfNecessary(m4 + m2 + m6, 22);
  const m13 = reduceNumberIfNecessary(
    m11 + m3 + m5 + m1 + m12 + m9 + m2 + m5 + m4,
    22
  );
  const m14 = reduceNumberIfNecessary(m1 + m2 + m3 + m4, 56);
  const firstSetHouses = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12];
  const secondSetHouses = [m13, m14];

  return {
    m1,
    m2,
    m3,
    m4,
    m5,
    m6,
    m7,
    m8,
    m9,
    m10,
    m11,
    m12,
    m13,
    m14,
    firstSetHouses,
    secondSetHouses,
  };
};

const getMatchs = (a, b, houses) => {
  const housesNames = Object.keys(houses);
  const selectedHouses = housesNames.filter(
    (key) => houses[key] === a || houses[key] === b
  );
  const combinaisons = [];
  selectedHouses.forEach((house, index, array) => {
    const numHouse = house.match(/\d+/)[0];
    array.forEach((element) => {
      const numElement = element.match(/\d+/)[0];
      const tempCombinaison = `Maison ${numHouse} & Maison ${numElement}`;

      if (
        element !== house &&
        houses[element] !== houses[house] &&
        numHouse > numElement &&
        combinaisons.indexOf(tempCombinaison) === -1
      ) {
        combinaisons.push(tempCombinaison);
      }
    });
  });
  return combinaisons;
};

const getMiroirImages = (reference) => {
  if (reference.length > 3) {
    return [Number(reference.slice(0, 2)), Number(reference.slice(2))];
  } else {
    return [Number(reference.slice(0, 1)), Number(reference.slice(1))];
  }
};

const combinaisonDoesntExist = (
  a,
  b,
  num,
  combinaisons,
  title,
  reversedTitle
) =>
  a + b === num &&
  (combinaisons.indexOf(title) === -1 ||
    combinaisons.indexOf(reversedTitle) === -1);

export const getMiroirs = (state) => {
  const { m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13 } = state,
    houses = { m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13 };
  let sortedHouses = [
      m1,
      m2,
      m3,
      m4,
      m5,
      m6,
      m7,
      m8,
      m9,
      m10,
      m11,
      m12,
      m13,
    ].sort((a, b) => a - b),
    miroirs13 = [],
    miroirs17 = [],
    miroirs22 = [],
    existingCombinaisons = [];

  sortedHouses.forEach((a, index, array) => {
    array.forEach((b) => {
      if (12 > a > 0 && b !== array[index]) {
        const title = a.toString() + b.toString(),
          reversedTitle = b.toString() + a.toString();
        if (
          combinaisonDoesntExist(
            a,
            b,
            13,
            existingCombinaisons,
            title,
            reversedTitle
          )
        ) {
          miroirs13.push({
            title: miroirs[title].title,
            images: getMiroirImages(title),
            combinaisons: getMatchs(a, b, houses),
          });
          existingCombinaisons.push(title, reversedTitle);
        }
        if (
          combinaisonDoesntExist(
            a,
            b,
            17,
            existingCombinaisons,
            title,
            reversedTitle
          )
        ) {
          miroirs17.push({
            title: miroirs[title].title,
            images: getMiroirImages(title),
            combinaisons: getMatchs(a, b, houses),
          });
          existingCombinaisons.push(title, reversedTitle);
        }
        if (
          combinaisonDoesntExist(
            a,
            b,
            22,
            existingCombinaisons,
            title,
            reversedTitle
          )
        ) {
          miroirs22.push({
            title: miroirs[title].title,
            images: getMiroirImages(title),
            combinaisons: getMatchs(a, b, houses),
          });
          existingCombinaisons.push(title, reversedTitle);
        }
      }
    });
  });

  return { miroirs: { miroirs13, miroirs17, miroirs22 } };
};

const isObject = (value) => typeof value === 'object' && !Array.isArray(value);

const getTriades = (houses) => {
  const matchsTriade = [];

  for (let i = 0, count = 1; i < houses.length; i++) {
    if (count === 3) {
      matchsTriade.push({
        card: houses[i],
        message: triadesDB[houses[i]],
      });
    }
    houses[i] === houses[i + 1] ? count++ : (count = 1);
  }
  return matchsTriade;
};

const getChemins = (houses) => {
  const chemins = [];

  (function iterateThroughCheminsDB(obj, houses, path = []) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && houses.includes(key)) {
        if (isObject(obj[key])) {
          iterateThroughCheminsDB(obj[key], houses, [...path, key]);
        }

        if (typeof obj[key] === 'string') {
          chemins.push({ path: [...path, key], message: obj[key] });
        }
      }
    }
  })(cheminsDB, houses);

  return chemins;
};

export const getCheminsEtTriades = (houses) => {
  const housesFormated = houses
    .sort((a, b) => a - b)
    .map((value) => value.toString());

  return {
    chemins: getChemins(housesFormated),
    triades: getTriades(housesFormated),
  };
};

export const getPersonnalYears = ({ m6 }, { year }) => {
  let personnalYears = [],
    i = year + 112;
  for (; year < i; year++) {
    personnalYears.push(reduceNumberIfNecessary(m6 + reduceYear(year), 22));
  }
  return { personnalYears };
};

export const exctractBirthday = (date) =>
  date.value.split('-').map((value) => Number(value));

export const handleSubmit = (e) => {
  const form = e.currentTarget.elements,
    data = {};
  e.preventDefault();
  if (form['birthdayPartner']) {
    let [yearPartner, monthPartner, dayPartner] = exctractBirthday(
      form['birthdayPartner']
    );

    data.firstnamePartner = form['firstnamePartner'].value;
    data.lastnamePartner = form['lastnamePartner'].value;
    data.yearPartner = yearPartner;
    data.monthPartner = monthPartner;
    data.dayPartner = dayPartner;
  }

  let [year, month, day] = exctractBirthday(form['birthday']),
    date = new Date();

  year = year && year.toString().length > 4 ? year.toString().slice(1) : year;

  data.firstname = form['firstname'].value;
  data.lastname = form['lastname'].value;
  data.birthday = form['birthday'].value;
  data.currentYear = date.getFullYear();
  data.year = year;
  data.month = month;
  data.day = day;
  data.miroir13 = [];
  data.miroir17 = [];
  data.miroir22 = [];

  if (form['currentYear'].value) {
    data.currentYear = Number(form['currentYear'].value);
  }

  return data;
};

/*
A: 24.09.1955, 07.01.1989

7 1 9 17

m1 : 13
m2 : 10
m3 : 11
m4 : 7
m5 : 5
m6 : 5
m7 : 1
m8 : 10
m9 : 6
m10 : 16
m11 : 10
m12 : 22
m13 : 17
m14 : 41

B: 07.01.1989, 24.09.1955

7 1 9 8

m1: 13,
m2: 10,
m3: 11,
m4: 16,
m5: 5,
m6: 5,
m7: 1,
m8: 10,
m9: 6,
m10: 16,
m11: 10,
m12: 4,
m13: 8,
m14: 50,
*/
