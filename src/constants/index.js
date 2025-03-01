import React from 'react';

const navLinks = ['topics', 'activity'];

const postControlIcons = {
  'kp': <i className="fas fa-bullseye"></i>,
  'f': <i className="fas fa-heart"></i>,
  'b': <i className="fas fa-bookmark"></i>,
  'c': <i className="fas fa-comment"></i>,
  'd': <i className="fas fa-trash-alt"></i>,
  'e': <i className="fas fa-edit"></i>,
  'u': <i className="fas fa-chevron-up"></i>
}

const topics = [
  'web development',
  'javascript',
  'data science',
  'programming',
  'science',
  'focus',
  'health'
]

export {
  navLinks,
  postControlIcons,
  topics
}
