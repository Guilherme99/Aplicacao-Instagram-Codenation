import React from 'react';

import './UserProfile.scss';
import TobBar from '../../components/Topbar'

const UserProfile = ({ avatar, name, username }) => {
  return (
    <>
      <TobBar/>
      
      <section className="profile" data-testid="user-profile">
          <div className="profile-data">
              <div className="user">

              </div>
              <div className="user__thumb">
                  <img src="https://avatars1.githubusercontent.com/u/3655266?s=40&v=4" alt=""/>
              </div>
              <div className="user__name">
                teste <span>span</span>
              </div>

          </div>
      </section>

    </>
  )
};

export default UserProfile;
