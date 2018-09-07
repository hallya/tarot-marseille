import React from 'react';
import PropTypes from 'prop-types';
import Signature from 'Components/User/signature';

const Cards = ({
  slideAndShow,
  firstSetHouses,
  secondSetHouses,
  firstname,
  lastname,
  firstnamePartner,
  lastnamePartner,
  day,
  month,
  year,
  dayPartner,
  monthPartner,
  yearPartner,
  shadowAnimation,
  showDescription,
  majors,
  minors,
}) => (
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
        <Signature firstname={firstname} lastname={lastname} day={day} month={month} year={year} />
        <br />
        {
          yearPartner && 'et'
        }
        <br/>  
        {
          yearPartner && <Signature firstname={firstnamePartner} lastname={lastnamePartner} day={dayPartner} month={monthPartner} year={yearPartner} />
        }  
      </li>
      {
        secondSetHouses.map((card, i) => <li key={i} className={`m${i + 13}`}>
          <img src={i === 0 ? majors[secondSetHouses[i]] : minors[secondSetHouses[i]]} className={shadowAnimation} alt='' />
          <p className={`description ${showDescription}`}>{`Maison ${i + 13}`}</p>
        </li>)
      }
    </ul>
  </section>
)

Cards.propTypes = {
  slideAndShow: PropTypes.string
}
export default Cards;