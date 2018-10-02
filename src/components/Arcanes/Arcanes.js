import React from 'react';
import PropTypes from 'prop-types';
import Signature from 'Components/User/signature';
import { majors, minors } from '../../utils/img';
import './Arcanes.scss';

const Cards = ({
  shadowAnimation,
  showDescription,
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
  yearPartner
}) => (
  <article className={`arcanes ${year !== 'undefined' ? '' : 'hide-arcanes'}`}>
    <ul className='first'>
      {
        firstSetHouses && firstSetHouses.map((card, i) => (
          <li key={i} className={`m${i + 1}`}>
            <figure>
                <picture>  
                  <img src={majors[firstSetHouses[i]]} className={year !== undefined ? 'anim-shadow' : ''} alt='' />
                </picture>
                <figcaption className={`description ${year !== 'undefined' ? 'show-description' : ''}`}>
                  {`Maison ${i + 1}`}
                </figcaption>
            </figure>
        </li>)
        )
      }
    </ul>
    <ul className='second'>
      <li className='fullname' >
        <Signature firstname={firstname} lastname={lastname} day={day} month={month} year={year} />
        {
          yearPartner && <p>et</p>
        }
        {
          yearPartner && <Signature firstname={firstnamePartner} lastname={lastnamePartner} day={dayPartner} month={monthPartner} year={yearPartner} />
        }  
      </li>
      {
          secondSetHouses && secondSetHouses.map((card, i) => (
            <li key={i} className={`m${i + 13}`}>
              <figure>
                <picture>
                  <img src={i === 0 ? majors[secondSetHouses[i]] : minors[secondSetHouses[i]]} className={shadowAnimation} alt='' />
                </picture>
                <figcaption className={`description ${year !== 'undefined' ? 'show-description' : ''}`}>
                  {`Maison ${i + 13}`}
                </figcaption>
              </figure>
            </li>
          ))
      }
    </ul>
  </article>
)

Cards.propTypes = {
  slideAndShow: PropTypes.string,
  firstSetHouses: PropTypes.array,
  secondSetHouses: PropTypes.array,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  firstnamePartner: PropTypes.string,
  lastnamePartner: PropTypes.string,
  day: PropTypes.number,
  month: PropTypes.number,
  year: PropTypes.number,
  dayPartner: PropTypes.number,
  monthPartner: PropTypes.number,
  yearPartner: PropTypes.number,
  shadowAnimation: PropTypes.string,
  showDescription: PropTypes.string,
  majors: PropTypes.array,
  minors: PropTypes.array,
}
export default Cards;