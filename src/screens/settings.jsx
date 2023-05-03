import { Image } from 'antd';
function Settings() {
    return (
        <>
         <div className="col-12 bg-white">
                    <div className="row">
                        <div className="col-1 fa-2x"><a href='/'><i class="fa-solid fa-arrow-left"></i></a></div>
                        <div className='col-1'><Image style={{"border-radius":"100%"}}
    width={100}
    src="https://i.pinimg.com/736x/a5/e9/97/a5e9975a5a7d817383cbdbfbfd4c4a3d.jpg"
  /></div>
                        <div className="col-1 mt-1"><h3>PBP</h3></div>
                        <div className="col-6"></div>
                        <div className="col-1 fa-2x"><a href='search'><i class="fa-solid fa-magnifying-glass"></i></a></div>
                        <div className="col-1 fa-2x"><i class="fa-solid fa-ellipsis-vertical "></i></div>
                    </div>
                    <h1>Настройки</h1>
                    <div style={{ "backgroundColor": "#BBBBBB" }}>
                    <div className='row'>
                    <a href='conf'><div className="col-1"><i class="fa-solid fa-lock fa-2x"></i></div></a>
                    <div className="col-11"><h3>Конфиденциальнсть</h3></div>
                    <div className="col-1"><i class="fa-solid fa-globe fa-2x"></i></div>
                    <div className="col-11"><h3>Язык</h3></div>
                    </div>
                    </div>
                    

                </div>
            
         
        </>

    );
}
export default Settings;