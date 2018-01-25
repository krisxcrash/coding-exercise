var root = 'https://jsonplaceholder.typicode.com';

$.ajax({
  url: root + '/posts',
  method: 'GET'
}).then(function(data) {
  console.log(data);

  for (let i = 0; i < 5; i++) {
      const element = data[i];
      console.log(element);
      
  }


});