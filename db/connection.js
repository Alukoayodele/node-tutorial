const mongoose = require('mongoose');
const username = encodeURIComponent(process.env.USERNAME);
const password = encodeURIComponent(process.env.PASSWORD);
const connectString =`mongodb+srv://${username}:${password}@test.px0612r.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(connectString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connection Successfully')
}).catch((e)=> {
    console.log('Connection Failed')
})

