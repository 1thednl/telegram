import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './screens/main';
import Photo from './screens/contacts';
import Chat from './screens/chat';
import Search from './screens/search';
import Contacts from './screens/contacts';
import Settings from './screens/settings';
import Profile from './screens/profile';
import Conf from './screens/conf';
import Lang from './screens/lang';


function App() {
  return (
    <div>
        <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Main/>}/>
                  <Route path='/settings' element={<Settings/>}/>
                  {/* <Route path='/conf' element={<Conf/>}/> */}
                  <Route path='/contacts' element={<Contacts/>}/>
                  <Route path='/search' element={<Search/>}/>
                  <Route path='/profile' element={<Profile/>}/>
                  <Route path='/photo' element={<Photo/>}/>
                  <Route path='/chat' element={<Chat/>}/>
                  <Route path='/conf' element={<Conf/>}/>
                  <Route path='/lang' element={<Lang/>}/>

              </Routes>
        
        
        </BrowserRouter>
    </div>
  );
}

export default App;
