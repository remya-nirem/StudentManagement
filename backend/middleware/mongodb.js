const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://remyak:atLasDB22@cluster0.nxczl99.mongodb.net/studentDB?retryWrites=true&w=majority', {
    useNewUrlParser: true
    //useUnifiedTopoloy: true
})
.then(() => {
    console.log('db connected successfully')
})
.catch(error =>{
    console.log(' error connecting db :'+ error.message);
})