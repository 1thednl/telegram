import { Button, Drawer } from 'antd';
import { Image } from 'antd';
import React, { useState } from 'react';
const Main = () => {
    const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
    return (
        <>
        <div className="row">
            <div className="col-12 bg-white">
                <div className="row">
               <div className="col-1 fa-2x"><i class="fa-solid fa-bars" onClick={showDrawer}></i></div>
                    <div className="col-3 mt-1"><h3>Telegram</h3></div>
                    <div className="col-6"></div>
                    <div className="col-2 fa-2x"><a href='search'><i class="fa-solid fa-magnifying-glass"></i></a></div>
                </div>
            </div>
            <div style= {{backgroundColor :"#BBBBBB"}}>
            <div className="col-12">
                <div className="row">
                    <div className="col-1"><a href='chat'><Image style={{"border-radius":"100%"}}
    width={100}
    src="https://i.pinimg.com/736x/a5/e9/97/a5e9975a5a7d817383cbdbfbfd4c4a3d.jpg"
  /></a></div>
                    <div className="col-9">
                    <b>Бексултан IT</b><br/>
                        <p className="mt-4"><b className="text-secondary">Ок</b></p>
                    </div>
                    <div className="col-2"><b>15:07</b></div>
                </div>
            </div>
            <div className="col-12 mt-3">
                <div className="row">
                    <div className="col-1"><a href='chat'><Image style={{"border-radius":"100%"}}
    width={100}
    src="https://i.pinimg.com/736x/a5/e9/97/a5e9975a5a7d817383cbdbfbfd4c4a3d.jpg"
  /></a></div>
                    <div className="col-9">
                        <b>!!!</b><br />
                        <p className="mt-4"><b className="text-secondary">АХАХАХАХА</b></p>
                    </div>
                    <div className="col-2"><b>15:07</b></div>
                </div>
            </div>
            <div className="col-12 mt-3">
                <div className="row">
                    <div className="col-1"><a href='chat'><Image style={{"border-radius":"100%"}}
    width={100}
    src="https://i.pinimg.com/736x/a5/e9/97/a5e9975a5a7d817383cbdbfbfd4c4a3d.jpg"
  /></a></div>

                    <div className="col-9">
                        <b>Азим Акя</b><br />
                        <p className="mt-4"><b className="text-secondary">Крутой</b></p>
                    </div>
                    <div className="col-2"><b>12:12</b></div>
                </div>
            </div>
            <div className="col-12 mt-3">
                <div className="row">
                    <div className="col-1"><a href='chat'><img style={{ 'border-radius': '100%' }} src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/9cc57b67094899.5b2d5021ea0bc.png" width={'100%'}></img></a></div>
                    <div className="col-9">
                        <b>Чинчонг</b><br />
                        <p className="mt-4"><b className="text-secondary">Мы лох</b></p>
                    </div>
                    <div className="col-2"><b>17:01</b></div>
                </div>
            </div>
            <div className="col-12 mt-3">
                <div className="row">
                    <div className="col-1"><a href='chat'><Image style={{"border-radius":"100%"}}
    width={100}
    src="https://i.pinimg.com/736x/a5/e9/97/a5e9975a5a7d817383cbdbfbfd4c4a3d.jpg"
  /></a></div>
                    <div className="col-9">
                        <b>Чочонг</b><br />
                        <p className="mt-4"><b className="text-secondary">Ты лох</b></p>
                    </div>
                    <div className="col-2"><b>17:01</b></div>
                </div>
            </div>
            <div className="col-12 mt-3">
                <div className="row">
                    <div className="col-1"><a href='chat'><img style={{ 'border-radius': '100%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPwRKy_SYqqSmDZjVjumLqoJTfldW8k1NqPA&usqp=CAU" width={'100%'}></img></a></div>
                    <div className="col-9">
                        <b>Ким Чонг</b><br />
                        <p className="mt-4"><b className="text-secondary">Я лох</b></p>
                    </div>
                    <div className="col-2"><b>01:17</b></div>
                </div>
            </div>
            <div className="col-10"></div>
            <div className="col-2"><button style={{'border-radius':"50%"}} className="btn btn-primary"><i class="fa-solid fa-pen fa-2x"></i></button></div>
            </div>
            </div>
            
            <Drawer title="PBP" placement="left" onClose={onClose} open={open}>
      <div className='col-12'><Image style={{"border-radius":"100%"}}
    width={100}
    src="https://i.pinimg.com/736x/a5/e9/97/a5e9975a5a7d817383cbdbfbfd4c4a3d.jpg"
  /></div>
  <div className='col-12'>+996550550324</div>
  <div className='col-12 mt-3'><i class="fa-solid fa-users fa-2x"></i><b>Создать группу</b></div>
  <div className='col-12 mt-3'><a href='contacts'><i class="fa-solid fa-user fa-2x"></i><b>Контакты</b></a></div>
  <div className='col-12 mt-3'><i class="fa-solid fa-phone fa-2x"></i><b>Звонки</b></div>
  <div className='col-12 mt-3'><i class="fa-solid fa-person fa-2x"></i><b>Люди рядом</b></div>
  <div className='col-12 mt-3'><i class="fa-regular fa-bookmark fa-2x"></i><b>Избранное</b></div>
  <div className='col-12 mt-3'><a href='settings'><i class="fa-solid fa-gear fa-2x"></i><b>Настройки</b></a></div>
  
        </Drawer>
 
        </>

    );
}
export default Main;