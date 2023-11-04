const fs = require('fs');
const path = require('path');

//append content to file
fs.appendFile(
  path.join(__dirname, 'posts', 'blogPost.txt'),
  '\nMore data',
  (err) => {
    if (err) {
      console.log('err in data addition');
      return;
    }
    console.log('file contents updated');
  }
);