const exp = require('express')
const app=exp()
const faker = require('faker')

app.get('/',async (req,res)=>{
    let data =[]
    console.log(req.query);
    
    for (let i = 0; i < req.query.number; i++) {
        if(req.query.number>1000){
            return res.send("Número máximo de dados é 1000")
        }
        let name =faker.name.firstName()
        data.push({
            requestHour:new Date,
            name:name,
            email:faker.internet.email(name),
            city:faker.address.city(),
            photo:faker.image.avatar()
        })
        
    }

    return res.send(data)

})

app.listen(8080)