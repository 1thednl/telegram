import { Image } from 'antd';
function Profile() {
    return (
        <>
          <div className="col-12 bg-white">
                    <div className="row">
                        <div className="col-1 fa-2x"><a href='/'><i class="fa-solid fa-arrow-left"></i></a></div>
                        <div className='col-1'><Image style={{"border-radius":"100%"}}
    width={100}
    src="https://i.pinimg.com/736x/a5/e9/97/a5e9975a5a7d817383cbdbfbfd4c4a3d.jpg"
  /></div>
                        <div className="col-2 mt-1"><h3>PBP</h3></div>
                        <div className="col-6"></div>
                        <div className="col-1 fa-2x"><a href='search'><i class="fa-solid fa-magnifying-glass"></i></a></div>
                        <div className='col-1 mt-2'><i class="fa-solid fa-ellipsis-vertical fa-2x"></i></div>
                        <div className='col-12'><h1>Информация</h1></div>
                        <div className='col-12'><b>+996 550890405</b></div>
                        <div className='col-12'><b>Уведомления</b></div>


                    </div>
                </div>
            
         
        </>

    );
}
export default Profile;