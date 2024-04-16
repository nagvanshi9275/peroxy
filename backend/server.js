// run `node index.js` in the terminal

//console.log(`Hello Node.js v${process.versions.node}!`);


import express from 'express'


const app = express()

app.get('/', (req, res) => {

     res.send('server is ready')



})


app.get('/api/jokes', (req, res) => {

 // res.send('server is ready')

       const jokes = [

               {

               id: 1,
               title: "joke",
               content: "joke1"




               },


               {

                id: 2,
                title: "joke two",
                content: "joke2"
 
 
 
 
                },

                {

                  id: 3,
                  title: "joke three",
                  content: "joke3"
   
   
   
   
                  },



             



       ]


       res.send(jokes)


})




const port = process.env.PORT || 3000

app.listen(port, () => {


      console.log(`server at http://localhost:${port}`)

})















