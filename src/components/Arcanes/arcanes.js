import React from 'react';
import './arcanes.scss';


const Arcanes = ({
  handleUser,
  majors,
  minors,
  firstname,
  lastname,
  day,
  month,
  year,
  firstSetHouses,
  secondSetHouses
}) => {
  const
    slideAndShow = !year || year === 0 ? 'hide-arcanes' : '',
    shadowAnimation = secondSetHouses[secondSetHouses.length - 1] >= 0 ? 'anim-shadow' : '',
    showDescription = secondSetHouses[secondSetHouses.length - 1] >= 0 ? 'show-description' : '';

  return (
    <main className='arcane'>
      <section className='settings'>
        <form onSubmit={handleUser}>
          <input className='user' type='text' autoComplete='given-name' name='firstname' placeholder='Prenom'></input>
          <input className='user' type='text' autoComplete='family-name' name='lastname' placeholder='Nom'></input>
          <input required className='user' type='date' name='birthday' min="0001-01-01" max="3000-12-31"></input>
          <input className='user' type='number' name='currentYear' placeholder='Année courante'></input>
          <button className='user' type="submit">Valider</button>
        </form>
      </section>
      <section className={`results ${slideAndShow}`}>
        <ul className='first'>
          {
            firstSetHouses.map((card, i) => <li key={i} className={`m${i + 1}`}>
              <img src={majors[firstSetHouses[i]]} className={shadowAnimation} alt=''/>
                <p className={`description ${showDescription}`}>{`Maison ${i + 1}`}</p>
              </li>
            )
          }
        </ul>
        <ul className='second'>
          <li className='fullname' >
            {firstname}
            <br />
            {lastname}
            <br />
            né(e) le {day}.{month}.{year}
          </li>
          {
            secondSetHouses.map((card, i) => <li key={i} className={`m${i + 13}`}>
              <img src={i === 0 ? majors[secondSetHouses[i]] : minors[secondSetHouses[i]]} className={shadowAnimation} alt='' />
              <p className={`description ${showDescription}`}>{`Maison ${i + 13}`}</p>
            </li>)
          }
        </ul>
      </section>
    </main>
  );  
}

export default Arcanes;