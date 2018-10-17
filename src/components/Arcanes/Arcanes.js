import React from 'react';
import PropTypes from 'prop-types';
import Signature from 'Components/User/signature';
import Maison from './Maison/Maison';
import { majors, minors } from '../../utils/imgDB';
import './Arcanes.scss';

const Cards = ({
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
  <article className='arcanes'>
    <ul className='first'>
      {
        firstSetHouses.map((houseValue, i) => <Maison key={`maison ${i + 1}`} cardPath={majors[houseValue]} houseNumber={i + 1} />)
      }
    </ul>
    <ul className='second'>
      <li className='fullname' >
        <Signature firstname={firstname} lastname={lastname} day={day} month={month} year={year} />
        {yearPartner && <p>et</p>}
        {yearPartner && <Signature firstname={firstnamePartner} lastname={lastnamePartner} day={dayPartner} month={monthPartner} year={yearPartner} />}
      </li>
      <Maison cardPath={majors[secondSetHouses[0]]} houseNumber={13} />
      <Maison cardPath={minors[secondSetHouses[1]]} houseNumber={14} />
    </ul>
  </article>
)

Cards.propTypes = {
  firstSetHouses: PropTypes.array.isRequired,
  secondSetHouses: PropTypes.array.isRequired,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  firstnamePartner: PropTypes.string,
  lastnamePartner: PropTypes.string,
  day: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  dayPartner: PropTypes.number,
  monthPartner: PropTypes.number,
  yearPartner: PropTypes.number,
}
export default Cards;