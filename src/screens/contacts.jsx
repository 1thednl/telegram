function Contacts() {
    return (
        <>
        <div style={{ "backgroundColor": "#BBBBBB" }}>
            <div className="row">
                <div className="col-12 bg-white">
                    <div className="row">
                        <div className="col-1 fa-2x"><i class="fa-solid fa-arrow-left"></i></div>
                        <div className="col-3 mt-1"><h3>Контакты</h3></div>
                        <div className="col-6"></div>
                        <div className="col-2 fa-2x"><a href='search'><i class="fa-solid fa-magnifying-glass"></i></a></div>
                    </div>
                </div>
            

                
            <div className="col-1"><i class="fa-solid fa-user-plus fa-2x"></i></div>
                    <div className="col-11"><h3>Пригласить друзей</h3></div>
                    <div className="col-1 mt-3"><i class="fa-solid fa-location-dot fa-2x"></i></div>
                    <div className="col-11 mt-3"><h3>Найти людей рядом</h3></div>
                    
            </div> 
            </div>
            <div style={{ "backgroundColor": "#9E9E9E" }}  className="col-12"><h4>Сортировка по времени входа</h4></div>
            <div className="col-12 mt-3">
                <div className="row">
                    <div className="col-1"><a href='chat'><img style={{ 'border-radius': '100%' }} src="https://cdnb.artstation.com/p/marketplace/presentation_assets/000/705/407/large/file.jpg?1612184740" width={'100%'}></img></a></div>
                     <div className="col-9">
                        <b>Азим Акя</b><br />
                        <p className="mt-4"><b className="text-secondary">был(а) недавно</b></p>
                    </div>
                    
                </div>
            </div>
            <div className="col-12 mt-3">
                <div className="row">
                    <div className="col-1"><a href='chat'><img style={{ 'border-radius': '100%' }} src="https://cdnb.artstation.com/p/marketplace/presentation_assets/000/705/407/large/file.jpg?1612184740" width={'100%'}></img></a></div>
                     <div className="col-9">
                        <b>Чинчонг</b><br />
                        <p className="mt-4"><b className="text-secondary">был(а) недавно</b></p>
                    </div>
                    
                </div>
            </div>
            <div className="col-12 mt-3">
                <div className="row">
                    <div className="col-1"><a href='chat'><img style={{ 'border-radius': '100%' }} src="https://cdnb.artstation.com/p/marketplace/presentation_assets/000/705/407/large/file.jpg?1612184740" width={'100%'}></img></a></div>
                     <div className="col-9">
                        <b>Бексултан IT</b><br />
                        <p className="mt-4"><b className="text-secondary">был(а) недавно</b></p>
                    </div>
                    
                </div>
            </div>
            <div className="col-12 mt-3">
                <div className="row">
                    <div className="col-1"><a href='chat'><img style={{ 'border-radius': '100%' }} src="https://cdnb.artstation.com/p/marketplace/presentation_assets/000/705/407/large/file.jpg?1612184740" width={'100%'}></img></a></div>
                     <div className="col-9">
                        <b>Чо</b><br />
                        <p className="mt-4"><b className="text-secondary">был(а) недавно</b></p>
                    </div>
                    
                </div>
            </div>

            
            
            
            

        </>

    );
}
export default Contacts;