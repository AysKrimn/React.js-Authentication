import { Route, Routes } from 'react-router-dom';
import './App.css';

// Sayfalarımız
import AnaSayfa from './Pages/AnaSayfa.jsx'
import Urunler from './Pages/Urunler.jsx'
import UrunDetay from './Pages/UrunDetay';
import ErrorPage from './Pages/ErrorPage';
import NotFoundPage from './Pages/NotFoundPage';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import UserPage from './Pages/UserPage';
import Logout from './Pages/Logout';
import PersonList from './Pages/PersonList';
// layout component
import Layout from './Layout/Layout';
import LoginRequired from './Layout/LoginRequired';
import PermissionRequired from './Layout/PermissionRequired';
import GetUserData from './Layout/GetUserData';

// react hooks
import { useState } from 'react';






function App() {
  // state oluştur
  const [userDetail, setUserDetail] = useState(null)
  // urun state 
  // bu stateler @layout ve @Route /api-urunler/:id hizmet veriyor
  const [sepet, setSepet] = useState([])

  return (

      <>


          {/* {
              user === null

              ? 
                <div className='alert alert-warning'>
                  <p>Sepeti görmek için lütfen giriş yapınız.</p>
                </div>
              : null
          } */}

      <Routes>

      {/* public endpointler */}
      <Route element={<Layout sepet={sepet} setSepet={setSepet}></Layout>}>

          <Route element={<GetUserData></GetUserData>}>

                <Route path='/' element={<AnaSayfa setUserDetail={setUserDetail}> </AnaSayfa>}></Route>
                <Route path='/api-urunler' element={<Urunler></Urunler>}></Route>
                <Route path='/api-urunler/:id' element={<UrunDetay sepet={sepet} setSepet={setSepet}></UrunDetay>}></Route>
                <Route path='/giris' element={<Login></Login>}></Route>
                <Route path='/cikis' element={<Logout></Logout>}></Route>
                <Route path='/users/:name' element={<UserPage userDetail={userDetail} ></UserPage>}></Route>
                <Route path='/kadromuz' element={<PersonList></PersonList>}></Route>
                <Route path='/404' element={<ErrorPage></ErrorPage>}></Route>
                
                {/* private endpointler */}
                <Route element={<LoginRequired></LoginRequired>}>

                    <Route element={<PermissionRequired></PermissionRequired>}>

                          <Route path='/admin' element={<Admin></Admin>}></Route>
                    </Route>
                  

                </Route>

                {/* hiçbir url'e denk gelmezse */}
                <Route path='*' element={<NotFoundPage></NotFoundPage>} ></Route>
          
        </Route>
      </Route>

      </Routes>


     
      
      
      </>
  );
}

export default App;
