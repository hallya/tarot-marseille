import React from 'react';
import Form from '../Form/Form';
import SideNav from '../SideNav/SideNav';
import './SideBar.scss';

const SideBar = (props) => (
  <section className="sidenav">
    <Form {...props}>
      { props.children }
    </Form>
    <SideNav match={props.match}/>
  </section>
)

export default SideBar;