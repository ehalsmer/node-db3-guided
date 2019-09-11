const db = require('../data/db-config');

module.exports = {
    findUserPosts,
};


  // join users as u on u.id = p.user_id where u.id = 123
function findUserPosts(id){
    return db('users as u') // remember to return the call to db
    // returning a promise
    .join('posts as p', 'u.id', 'p.user_id')
    .where({ user_id: id })
    .select('p.id', 'p.contents', 'u.username')
    .then(posts => {
      return posts;
    })
}

  // previously: 
  // select * from posts where user_id = id
  // db('posts').where({user_id: id})
  // .then(posts => {
  //   res.status(200).json(posts);
  // })
  // .catch(err => res.send(err))