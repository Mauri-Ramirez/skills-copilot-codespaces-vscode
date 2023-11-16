// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { randomBytes } = require('crypto');
// Create web server
const app = express();
app.use(bodyParser.json());
app.use(cors());
// Create comments object
const commentsByPostId = {};
// Create route for /posts/:id/comments
app.get('/posts/:id/comments', (req, res) => {
    // Send comments object
    res.send(commentsByPostId[req.params.id] || []);
});
// Create route for /posts/:id/comments
app.post('/posts/:id/comments', (req, res) => {
    // Create comment ID
    const commentId = randomBytes(4).toString('hex');
    // Get comment content from request body
    const { content } = req.body;
    // Get comments for post ID
    const comments = commentsByPostId[req.params.id] || [];
    // Add comment to comments object
    comments.push({ id: commentId, content });
    // Add comments to comments object
    commentsByPostId[req.params.id] = comments;
    // Send comment object
    res.status(201).send(comments);
});
// Listen on port 4001
app.listen(4001, () => {
    console.log('Listening on 4001');
});
