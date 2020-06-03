import React, { useCallback, useState } from "react";

import { Link } from 'react-router-dom';

import './Story.scss';
  
import {FaWindowClose} from 'react-icons/fa'

const Story = ({ story, user, handleClose }) => {
  return (
    <section className="story" data-testid="story">
      <div className="container">
          <div className="story__header">
                <div className="user">
                      <div className="user__thumb">

                      </div>
                      <div className="user__name">
                          <h4>teste</h4>
                      </div>
                </div>
                <div className="story__close">
                    <FaWindowClose/>
                </div>
              </div>
              <div className="story__progress">
                  <div className="story__progress__elapsed">
                      
                  </div>
              </div>
              <div className="story__video__wrapper">
                <div className="video-player">
                  
                </div>
              </div>
      </div>
    </section>
  );
};

export default Story;
