import React from 'react';

import Post from '../../components/Post';

import './UserPosts.scss';

const UserPosts = ({ posts }) => (
  <div className="container">
      <div className="user-posts" data-testid="user-posts">
          <div className="post">
              <div className="post__figure">
                  <img src="https://avatars1.githubusercontent.com/u/3655266?s=40&v=4" alt=""/>
              </div>
          </div>
          <div className="post">
              <div className="post__figure">
                  <img src="https://avatars1.githubusercontent.com/u/3655266?s=40&v=4" alt=""/>
              </div>
          </div>
          <div className="post">
              <div className="post__figure">
                  <img src="https://avatars1.githubusercontent.com/u/3655266?s=40&v=4" alt=""/>
              </div>
          </div>
      </div>
     
      <div className="no-posts">
          <div className="no-posts__content">

          </div>
          <div className="no-posts__emoji">
            dtuasytdsa
          </div>
      </div>
      
  </div>
);

export default UserPosts;
