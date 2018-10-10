import React from 'react';
import Main from '../Main/Main';
import Fieldset from '../User/fieldset';
export const appRoutes = [
  {
    path: '/individuel',
    exact: false,
    Component: Main,
    Children: <Fieldset firstname={'firstname'} lastname={'lastname'} birthday={'birthday'}/>
  },
  {
    path: '/alliance',
    exact: false,
    Component: Main,
    Children: [
      <Fieldset firstname={'firstname'} lastname={'lastname'} birthday={'birthday'} />,
      <Fieldset firstname={'firstnamePartner'} lastname={'lastnamePartner'} birthday={'birthdayPartner'}/>
    ]
  }
];