import React from 'react';
import './alliance.scss';


const Alliance = (props) => {
  const { m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14 } = props.state,
    a = [m6, m12, m1, m8, m9, m2, m5, m4, m7, m3, m11, m10],
    b = [m13, m14],
    shortNamesA = ['m6', 'm12', 'm1', 'm8', 'm9', 'm2', 'm5', 'm4', 'm7', 'm3', 'm11', 'm10'],
    shortNamesB = ['m13', 'm14'],
    fullNamesA = ['Maison 6', 'Maison 12', 'Maison 1', 'Maison 8', 'Maison 9', 'Maison 2', 'Maison 5', 'Maison 4', 'Maison 7', 'Maison 3', 'Maison 11', 'Maison 10'],
    fullNamesB = ['Maison 13', 'Maison 14'],
    slideAndShow = props.state.m14 >= 0 ? '' : 'hide-arcanes',
    shadowAnimation = props.state.m14 >= 0 ? 'anim-shadow' : '',
    showDescription = props.state.m14 >= 0 ? 'show-description' : '';

  return (
    <main className='arcane'>
      <section className='settings'>
        <form onSubmit={props.handleUser}>
          <input className='user' type='text' autoComplete='given-name' name='firstname' placeholder='Prénom'></input>
          <input className='user' type='text' autoComplete='family-name' name='lastname' placeholder='Nom'></input>
          <input className='user' type='date' name='birthday' min="0001-01-01" max="9999-12-31"></input>
          <br/>
          <input className='user' type='text' autoComplete='given-name' name='firstnamePartner' placeholder='Prénom allié'></input>
          <input className='user' type='text' autoComplete='family-name' name='lastnamePartner' placeholder='Nom allié'></input>
          <input className='user' type='date' name='birthdayPartner' min="0001-01-01" max="9999-12-31"></input>
          <br/>
          <input className='user' type='number' name='currentYear' placeholder='Année courante'></input>
          <button className='user' type="submit">Valider</button>
        </form>
      </section>
      <section className={`results ${slideAndShow}`} ref={props.print}>
        <ul className='first'>
          {
            a.map((carte, i) => <li key={i} className={shortNamesA[i]}>
              <img src={props.state.cards[a[i]]} className={shadowAnimation} alt=''/>
                <p className={`description ${showDescription}`}>{fullNamesA[i]}</p>
              </li>
            )
          }
        </ul>
        <ul className='second'>
          <li className='fullname' >
            {props.state.firstname} {props.state.lastname}
            <br />
            né(e) le {props.state.day}.{props.state.month}.{props.state.year}
            <br />
            {props.state.firstname ? 'et' : ''}
            <br />
            {props.state.firstnamePartner} {props.state.lastnamePartner}
            <br />
            {
              props.state.firstnamePartner
                ? `né(e) le ${props.state.dayPartner}.${props.state.monthPartner}.${props.state.yearPartner}`
                : ''
            }
          </li>
          {
            b.map((carte, i) => <li key={i} className={shortNamesB[i]}>
              <img src={i === 0 ? props.state.cards[b[i]] : props.state.minors[b[i]]} className={shadowAnimation} alt='' />
              <p className={`description ${showDescription}`}>{fullNamesB[i]}</p>
            </li>)
          }
        </ul>
      </section>
    </main>
  );  
}

export default Alliance;