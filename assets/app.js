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
        console.log(data);
        numberOfPosts = data.length;

    });
}

const runAlbumQuery = (userId, postType, queryURL, numberOfAlbums) => {
    $.ajax({
        url: queryURL + '/' + postType + '?userId=' + userId,
        method: 'GET'
      }).then(function(data) {
        console.log(data);
        numberOfAlbums = data.length;
        // console.log(numberOfAlbums);
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

runPostQuery(1, 'posts', queryURL, numberOfPosts);

runAlbumQuery(1, 'albums', queryURL, numberOfAlbums);

runToDoQuery(1, 'todos', queryURL, numberOfToDos)

console.log(`Bret has ${numberOfPosts} posts, ${numberOfAlbums} albums, and ${numberOfToDos} todos`)
