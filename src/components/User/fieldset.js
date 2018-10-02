import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-date-picker';

class UserField extends Component {
  
  constructor(props) {
    super(props);
    this.state = {}
    this.onChange = this.onChange.bind(this);
  }

  onChange(date) {
    this.setState({ date });
  }

  render() {
    let { firstname, lastname, birthday } = this.props;
    return (
      <fieldset>
        <input className='user' type='text' autoComplete='given-name' name={firstname} placeholder='Prénom'></input>
        <input className='user' type='text' autoComplete='family-name' name={lastname} placeholder='Nom'></input>
        <DatePicker
          required
          className='user'
          name={birthday}
          onChange={this.onChange}
          value={this.state.date}/>
      </fieldset>
    )
  }
}

UserField.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired
}

export default UserField;