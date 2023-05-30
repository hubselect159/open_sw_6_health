//선언부
const express=require('express')
const path=require('path')
const hbs=require('hbs')

//const bodyParser=require('body-parser')
const fooddata=require('./utils/fooddata')

//express 사용
const app = express()
app.use(express.urlencoded({exrended:true}))
app.use(express.json())
//포트 번호 8080
const port=process.env.PORT||8080

const publicDir=path.join(__dirname, '../public')
const viewsPath=path.join(__dirname, '../templates/views')
const partialsPath=path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDir))

app.get('/', (req,res)=>{
    res.render('index', {
        제목: '건강 자가 진단 및 관리 사이트',
        식품명: '이름을 입력해주세요',
        칼로리: '표시 안됨'
    })

})

app.get('/chart',(req,res)=>{
    res.render('chart')
})

app.post("/food", (req, res)=>{
    fooddata(req.body.foodname, (error, {food}={})=>{
        if(error){
            return res.send({error})
        }
        return res.render('food',{
            제목:'식품정보',
            foodname:food['items']['DESC_KOR'],
            animal_plant:food['body']['items']['item']/*['animal_plant']*/,
        })
    })
})

app.listen(port, ()=>{
    console.log('server is up and runnig at port')
})