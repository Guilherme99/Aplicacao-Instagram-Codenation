import React, { useState, useEffect } from 'react';

import Loading from '../../components/Loading';

import Stories from '../../containers/Stories';
import Posts from '../../containers/Posts';
import Topbar from '../../components/Topbar';

import './FeedRoute.scss';

async function getStorys (id) {
  // You can await here
  const url = "https://5e7d0266a917d70016684219.mockapi.io/api/v1/users?page=1&limit=1&sortBy=createdAt";
  const response = await fetch(url);
  const users = await response.json();


  return users;
  // ...
}

const FeedRoute = () => {

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [listId, setListId] = useState([]);

  useEffect(() => {
      async function getUsers () {
        // You can await here
        setLoading(true);

        const url = "https://5e7d0266a917d70016684219.mockapi.io/api/v1/users?page=1&limit=2&sortBy=createdAt";
        const response = await fetch(url);
        const data = await response.json();
        
        setUsers(data); 
        setLoading(false);
        // ...
      }

      getUsers();     
    
    
  }, []);
  
  useEffect( async ()=>{

    const data = (id) => {
      let url = `https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${id}/posts?page=1&limit=3&sortBy=createdAt`;
      let response = fetch(url);
      
      return response;

    }
    let id = 1;
    const resul = await data(id).then(response=>response).then(data => data.json());
    setPosts(...posts, resul);
  

  }, []);

  return (
    
    <>
    
      {loading? <Loading /> : 
          <div data-testid="feed-route">
              <Topbar/>      
              <Stories />      
              <Posts />
       
            </div>
      }
    </>
  );
};

export default FeedRoute;
