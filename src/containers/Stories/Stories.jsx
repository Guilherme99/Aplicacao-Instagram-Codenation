import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const showStory = false;
  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
            <div className="user__thumb">
                <div className="user__thumb__wrapper">
                    <img src="https://avatars1.githubusercontent.com/u/3655266?s=40&v=4" alt=""/>
                </div>
            </div>
            <div className="user__thumb">
                <div className="user__thumb__wrapper">
                    <img src="https://avatars1.githubusercontent.com/u/3655266?s=40&v=4" alt=""/>
                </div>
            </div>
            <div className="user__thumb">
                <div className="user__thumb__wrapper">
                    <img src="https://avatars1.githubusercontent.com/u/3655266?s=40&v=4" alt=""/>
                </div>
            </div>
        </div>
      </section>

      {showStory && (
        <Story />
        )}
    </React.Fragment>
  );
};

export default Stories;
