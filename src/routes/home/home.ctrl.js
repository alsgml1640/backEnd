
const home = (req,res)=>{
    res.render('home/index');
}

const login =(req,res)=>{
    res.render('home/login');
}

// 넘겨주기
module.exports = { home, login}