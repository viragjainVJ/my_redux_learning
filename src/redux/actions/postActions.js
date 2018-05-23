import { FETCH_POST, NEW_POST } from './types';

export const fetchPost = () => dispatch => {
	//Resolver or a promise {dispatch}
	//data or payload which we want to send
	
	//Method to fetch the data from the URL of JSON format
	fetch('https://jsonplaceholder.typicode.com/posts')
	 .then(res => res.json())
	 .then(posts => dispatch({
	 	type: FETCH_POST,
	 	payload: posts
	  	})
	 );
};

export const createPost = (postData) => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .then(post => dispatch({
		 	type: NEW_POST,
		 	payload: post
	  	}));
};