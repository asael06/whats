import React, { Fragment } from 'react'
import './contact-bar.css'

const ContactBar = () => (
  <Fragment>
    <div className="contact-bar">
      <div className="user-img">
        <img src="https://scontent.ftpq1-1.fna.fbcdn.net/v/t1.6435-9/137511439_3865471500139641_3845060631653299381_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeG99M_ylUZohYg0YJn3BjDAgRSXj5VopeaBFJePlWil5tKPwkjYLTXj7PKr9pN2uXn1TwGGycyd2kyJa0kGulCS&_nc_ohc=ZGhMHhK3-UYAX_a8GQK&_nc_ht=scontent.ftpq1-1.fna&oh=39da1d484d643e064ecc171b7dbec126&oe=60D1BC45" alt=""/>
      </div>
      <div className="contact-menu">
        <div className="contact-status">
          <button className="status">
            <img src="https://image.flaticon.com/icons/png/512/226/226757.png" alt="txt"/>
          </button>
        </div>
        <div className="new-chat">
          <button className="new-message">
            <img src="https://image.flaticon.com/icons/png/512/226/226757.png" alt="txt"/>
          </button>
        </div>
        <div className="show-options">
          <button className="options">
            <img src="https://image.flaticon.com/icons/png/512/226/226757.png" alt="txt"/>
          </button>
          <ul className="options-list">
            <li>New Group</li>
            <li>Create Room</li>
            <li>Perfil</li>
            <li>Archived</li>
            <li>outstanding</li>
            <li>Settings</li>
            <li>Sign Out</li>
          </ul>
        </div>
      </div>
    </div>
  </Fragment>
)

export default ContactBar