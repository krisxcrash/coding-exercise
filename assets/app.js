const queryURL = 'https://jsonplaceholder.typicode.com';

let posts = [];
let post = 0;
let numberOfPosts = 0;
let numberOfAlbums = 0;
let numberOfToDos = 0;

const runPostQuery = (userId, postType, queryURL, numberOfPosts) => {
    $.ajax({
        url: queryURL + '/' + postType + '?userId=' + userId,
        method: 'GET'
      }).then(function(data) {
        
        for (let i = 0; i < 5; i++) {
            const postData = data[i];
            numberOfPosts++;
            console.log(`Post ${numberOfPosts}: ${postData.title}`);
        }
    });
}

const runAlbumQuery = (userId, postType, queryURL, numberOfAlbums) => {
    $.ajax({
        url: queryURL + '/' + postType + '?userId=' + userId,
        method: 'GET'
      }).then(function(data) {
        console.log(data);
        numberOfAlbums = data.length;
    });
}

const runToDoQuery = (userId, postType, queryURL, numberOfAlbums) => {
    $.ajax({
        url: queryURL + '/' + postType + '?userId=' + userId,
        method: 'GET'
      }).then(function(data) {
        console.log(data);
        numberOfAlbums = data.length;
        // console.log(numberOfAlbums);
    });
}

const getComments = (userId, postType, queryURL) => {
    $.ajax({
        url: queryURL + '/posts/1/' + postType + '?PostId=5',
        method: 'GET'
      }).then(function(data) {
        console.log(`Viewing post ${'test'} which has ${data.length} comments`)
    });
}

runPostQuery(1, 'posts', queryURL, numberOfPosts);

runAlbumQuery(1, 'albums', queryURL, numberOfAlbums);

runToDoQuery(1, 'todos', queryURL, numberOfToDos);

getComments(1, 'comments', queryURL)

console.log(`Bret has ${numberOfPosts} posts, ${numberOfAlbums} albums, and ${numberOfToDos} todos`)
