const express = require('express');
const app = express();

app.use(express.json()); //Middleware to parse JSON request bodies

//Custom Middleware logs every request
app.use((req,res,next)=>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
})

// Maintenance mode middleware
app.use((req, res, next) => {
    const isMaintenance = false; // change to true to test
  
    if (isMaintenance) {
      res.status(503).send('Server under maintenance, come back later.');
    } else {
      next(); // continue to routes
    }
  });
//---------   ROUTES   ---------
app.get('/', (req, res) => {
    res.send('Hello from my 1st ever EXPRESS- Server');
});
app.get('/about', (req, res) => {
    res.send('This is the about page');
});
app.get('/api/user', (req, res) => {
    const user = {
        name: 'Shaquib Ahmad Khan',
        role: 'Frontend Dev', 
        experience: '8.7 years',
        age: 30,
        email: 'shaquib@example.com'
    };
    res.json(user);
});

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


