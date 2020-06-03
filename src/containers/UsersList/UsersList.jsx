import React from 'react';

import User from '../../components/User';
import Loading from '../../components/Loading';

import './UsersList.scss';

const UersList = ({ users }) => {
  return (
    <section className="users-list" data-testid="user-list">
        <div className="post">
            <div className="post__header">
              <div className="user__name">
                  <h3>User</h3>
              </div>
              <div className="user__thumb"> 
                <img src="https://avatars1.githubusercontent.com/u/3655266?s=40&v=4" alt=""/>
              </div>
            </div>
        </div>
        <div className="post">
            <div className="post__header">
              <div className="user__name">
                  <h3>User</h3>
              </div>
              <div className="user__thumb"> 
                <img src="https://avatars1.githubusercontent.com/u/3655266?s=40&v=4" alt=""/>
              </div>
            </div>
        </div>
        <div className="post">
            <div className="post__header">
              <div className="user__name">
                  <h3>User</h3>
              </div>
              <div className="user__thumb"> 
                <img src="https://avatars1.githubusercontent.com/u/3655266?s=40&v=4" alt=""/>
              </div>
            </div>
        </div>
    </section>
  )
};

export default UersList;
