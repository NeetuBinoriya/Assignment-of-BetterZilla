import express from 'express'

const app = express();
app.use(express.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
//     res.render('./index.ejs')
// })

// app.post('/register', (req, res) => {
//     // console.log(req.body);
//     const { name, email, password } = req.body
//     // res.render('./app.ejs', { name, email,password })
//     res.redirect('/login')
// });

// app.get('/login',(req,res)=>{
//     res.render('./login.ejs')
// })
 
let user = [];

app.get('/',(req,res)=>{
    res.render('./register.ejs')
})

app.post('/register',(req,res)=>{

    const {name,email,password} = req.body;
    user.push({ name, email, password });

    res.redirect('/login')

})

app.get('/login',(req,res)=>{
    res.render('./login.ejs')
})

app.post('/login',(req,res)=>{
    const {password,email} = req.body;

    for(let i=0; i<user.length; i++){
        if(user[i].password == password && user[i].email == email){
            res.redirect('/user')
        }else{
            res.redirect('/error')
        }
    }

})

app.get('/user',(req,res)=>{
    res.render('./user.ejs')
})

app.get('/error',(req,res)=>{
    res.send("error")
})



const port = 1000;

app.listen(1000, () => console.log(`server is runnignon port ${port}`))