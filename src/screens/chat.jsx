import { Image } from 'antd';
function Chat(){
    
    
    return(
<>
<div className="row">
    <div className="col-12 bg-primary">
        <div className="row">
    <div className="col-1"><a href='main'><a href='profile'><Image style={{"border-radius":"100%"}}
    width={100}
    src="https://i.pinimg.com/736x/a5/e9/97/a5e9975a5a7d817383cbdbfbfd4c4a3d.jpg"
  /></a></a></div>
    <div className="col-2"><h2>Бексултан IT</h2><h5>Last seen recently</h5></div>
    <div className="col-7"></div>
    <div className="col-1"><i class="fa-solid fa-phone fa-2x mt-4"></i></div>
    <div className="col-1"><i class="fa-solid fa-ellipsis-vertical fa-2x mt-4"></i></div>
   
    
    </div>
</div>
        <div class="col-1 mt-2"><Image style={{"border-radius":"100%"}}
    width={50}
    src="https://i.pinimg.com/736x/a5/e9/97/a5e9975a5a7d817383cbdbfbfd4c4a3d.jpg"
  /></div>
     <div style={{'background-color':"#000", 'border-radius':"10px"}} class="col-1 text-light mt-2">Я дома</div><div class="co-10"></div>
     <div class="col-11"></div><div style={{'background-color': "#3908ff", 'border-radius':"10px ;"}} class="col-1 text-light mt-5">Ок</div>
     <div class="col-1 mt-5"><img style={{'border-radius':"50% "}} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4f51ce67094899.5b2d5021e9a49.png" width="50"></img></div>
     <div style={{'background-color':"#000" , 'border-radius': "10px"}} class="col-1 text-light mt-5">Ты кто ?</div><div class="co-10"></div>
     <div class="col-11"></div><div style={{'background-color':"#3908ff",'border-radius':"10px ;"}} class="col-1 text-light mt-5">А ты?</div>
     <div class="col-1 mt-5"><img style={{'border-radius': "50% "}} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4f51ce67094899.5b2d5021e9a49.png" width="50"></img></div>
     <div style={{'background-color':"#000" , 'border-radius':" 10px"}} class="col-1 text-light mt-5">Бексултан</div><div class="co-10"></div>
     <div class="col-12 mt-5"><input class="form-control" placeholder="Отправить сообщение...."></input></div>
</div>

</>

    );
}
export default Chat;