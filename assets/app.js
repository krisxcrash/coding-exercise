// const queryURL = 'https://jsonplaceholder.typicode.com';

// let posts = [];
// let post = 0;
// let numberOfPosts = 0;
// let numberOfAlbums = 0;
// let numberOfToDos = 0;

// const runPostQuery = (userId, postType, queryURL, numberOfPosts) => {
//     $.ajax({
//         url: queryURL + '/' + postType + '?userId=' + userId,
//         method: 'GET'
//       }).then(function(data) {
        
//         for (let i = 0; i < 5; i++) {
//             const postData = data[i];
//             numberOfPosts++;
//             console.log(`Post ${numberOfPosts}: ${postData.title}`);
//         }
//     });
// }

// const runAlbumQuery = (userId, postType, queryURL, numberOfAlbums) => {
//     $.ajax({
//         url: queryURL + '/' + postType + '?userId=' + userId,
//         method: 'GET'
//       }).then(function(data) {
//         numberOfAlbums = data.length;
//     });
// }

// const runToDoQuery = (userId, postType, queryURL, numberOfAlbums) => {
//     $.ajax({
//         url: queryURL + '/' + postType + '?userId=' + userId,
//         method: 'GET'
//       }).then(function(data) {
//         numberOfAlbums = data.length;
//     });
// }

// const getComments = (userId, postType, queryURL) => {
//     $.ajax({
//         url: queryURL + '/posts/1/' + postType + '?PostId=5',
//         method: 'GET'
//       }).then(function(data) {
//           console.log(data)
//         console.log(`Viewing post ${'5'} which has ${data.length} comments`)
//     });
// }

// runPostQuery(1, 'posts', queryURL, numberOfPosts);

// runAlbumQuery(1, 'albums', queryURL, numberOfAlbums);

// runToDoQuery(1, 'todos', queryURL, numberOfToDos);

// getComments(1, 'comments', queryURL)



const url = 'https://jsonplaceholder.typicode.com';
let posts = [];
let post = 0;
let numberOfPosts = 0;
let numberOfAlbums = 0;
let numberOfToDos = 0;

const postURL = url + '/posts?userId=1';

const postFetch = fetch(postURL)
  .then((resp) => resp.json()) 
  .then(function(data) {

    for (let i = 0; i < 5; i++) {
        const postData = data[i];
        numberOfPosts++;
        console.log(`Post ${numberOfPosts}: ${postData.title}`);
    }
});

const albumsURL = url + '/albums?userId=1';

const albumsFetch = fetch(albumsURL)
  .then((resp) => resp.json()) 
  .then(function(data) {
    numberOfAlbums = data.length;
    // console.log(numberOfAlbums);
});

const todosURL = url + '/todos?userId=1';

const todosFetch = fetch(todosURL)
  .then((resp) => resp.json())
  .then(function(data) {
    //  return data;
    // console.log(data.length);
    
});


const commentsURL = url + '/posts/1/comments?PostId=5';

const commentsFetch = fetch(commentsURL)
  .then((resp) => resp.json())
  .then(function(data) {
    console.log(`Viewing post ${'"nesciunt quas odio"'} which has ${data.length} comments`)
});


console.log(`Bret has ${numberOfPosts} posts, ${numberOfAlbums} albums, and ${todosFetch} todos`)

