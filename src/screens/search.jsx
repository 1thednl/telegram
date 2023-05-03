import { Image } from 'antd';
function Search() {
    return (
        <>
            <div></div>
            <div className="row">
                <div className="col-12"><input className="col-12"></input></div>
                <div className="col-2">
                    <div className="row">
                        <div className="col-12"><Image style={{"border-radius":"100%"}}
    width={100}
    src="https://i.pinimg.com/736x/a5/e9/97/a5e9975a5a7d817383cbdbfbfd4c4a3d.jpg"
  /></div>
                        <h4 className="ml-2">Чинчонг</h4>
                    </div>
                </div>
                <div className="col-2">
                    <div className="row">
                        <div className="col-12"><Image style={{"border-radius":"100%"}}
    width={100}
    src="https://i.pinimg.com/736x/a5/e9/97/a5e9975a5a7d817383cbdbfbfd4c4a3d.jpg"
  /></div>
                        <h4 className="ml-4">Leon</h4>
                    </div>
                </div>
                <div className="col-2">
                    <div className="row">
                        <div className="col-12"><Image style={{"border-radius":"100%"}}
    width={100}
    src="https://i.pinimg.com/736x/a5/e9/97/a5e9975a5a7d817383cbdbfbfd4c4a3d.jpg"
  /></div>
                        <h4 className="">Бексултан IT</h4>
                    </div>
                </div>
                <div className="col-2">
                    <div className="row">
                        <div className="col-12"><Image style={{"border-radius":"100%"}}
    width={100}
    src="https://i.pinimg.com/736x/a5/e9/97/a5e9975a5a7d817383cbdbfbfd4c4a3d.jpg"
  /></div>
                        <h4 className="ml-4">Nero</h4>
                    </div>
                </div>
                <div className="col-2">
                    <div className="row">
                        <div className="col-12"><Image style={{"border-radius":"100%"}}
    width={100}
    src="https://i.pinimg.com/736x/a5/e9/97/a5e9975a5a7d817383cbdbfbfd4c4a3d.jpg"
  /></div>
                        <h4 className="ml-4" >Vergil</h4>
                    </div>
                </div>
                <div className="col-2">
                    <div className="row">
                        <div className="col-12"><Image style={{"border-radius":"100%"}}
    width={100}
    src="https://i.pinimg.com/736x/a5/e9/97/a5e9975a5a7d817383cbdbfbfd4c4a3d.jpg"
  /></div>
                        <h4 className="ml-3">Dante</h4>
                    </div>
                </div>
                <div style={{ "background-color": "#BBBBBB" }} className="col-12"><h2>Недавние</h2></div>
            </div>
            <div className="col-12">
                <div className="row">
                    <div className="col-1"><a href='chat'><Image style={{"border-radius":"100%"}}
    width={100}
    src="https://i.pinimg.com/736x/a5/e9/97/a5e9975a5a7d817383cbdbfbfd4c4a3d.jpg"
  /></a></div>
                    <div className="col-9">
                        <b>Чинчонг</b><br />
                        <p className="mt-4"><b className="text-secondary">Был недавно</b></p>
                    </div>

                </div>
            </div>
        </>

    );
}
export default Search;