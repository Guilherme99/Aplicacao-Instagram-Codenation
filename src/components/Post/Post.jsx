import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {FaRegHeart} from 'react-icons/fa';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  return (
    <article className="post"  data-testid="post">
        <div className="post__header">
            <div className="user">
                <div className="user__thumb">
                    <img src="https://avatars1.githubusercontent.com/u/3655266?s=40&v=4" alt=""/>
                </div>
                <div className="user__name">
                      <h3>Teste</h3>
                </div>
            </div>
            <div className="follow-btn">
                <Link to="/users/2">Seguir</Link>
            </div>
        </div>
        <div className="post__context">
            <div className="post__figure">
                <img src="https://avatars1.githubusercontent.com/u/3655266?s=40&v=4" alt=""/>
            </div>
        </div>
        <div className="post__controls">
          <div className="post__control"> 
              <FaRegHeart />
          </div>
          <div className="post__status">
            <h4> <span>Curtido por </span> 
                italo 
                <span> e outras</span> 
                3 pessoas
            </h4>
              {/* <div className="user">  
                <span> italo </span>

                <div className="user__thumb">
                  <img src="https://avatars1.githubusercontent.com/u/3655266?s=40&v=4" alt=""/>
                </div>
              </div> */}
            
          </div>
        </div>
    </article>
  );
};

export default Post;
