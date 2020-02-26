import React, { Component } from 'react';
import './ActivityCommentItem.css';
import uuid from 'uuid/v4';
import { postControlIcons } from '../../constants';
import { getTimePassed } from '../../helpers';
import { Link } from 'react-router-dom';

export default ({id, user, post, username, date_created, content,
                controls, mods, handleDelete, favouritesUsers}) => {

  const date = getTimePassed(date_created)
  const counts = {
    'f': favouritesUsers.length
  }
  const activeClass = {
    'f': user && favouritesUsers.includes(user.id) ? 'active' : 'inactive',
  }

  const controlsJSX = controls ? <span
      key={uuid()}
      className='activity-comment-control-item'>
      <span className={`post-controls-text-item control-${activeClass['f']}`}>
        <span className='activity-control-count'>{favouritesUsers.length}</span>
        {postControlIcons['f']}
      </span>
    </span> : ''

  const modsJSX = mods ? <span
              key={uuid()}
              className='activity-comment-control-item'
              onClick={() => handleDelete(post, id)}
            >
              {postControlIcons['d']}
            </span> : ''

  return (
      <li className='activity-comment-item'>
        <div className='activity-comment'>
            <Link to={`/posts/${post}`}>
              <p className='activity-comment-date'>
                {date}
              </p>
              <p className='activity-comment-content'>
                {content}
              </p>
            </Link>
        </div>
        <div className='activity-comment-controls'>
          {controlsJSX}
          {modsJSX}
        </div>
      </li>
  )
}
