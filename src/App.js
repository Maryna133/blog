import {Routes,Route} from 'react-router-dom'
import Profile from './pages/profile/Profile'
import LogIn from './pages/login/LogIn'
import SignUp from './pages/singup/SignUp'
import Feeds from './pages/feeds/Feeds'
import Header from './components/header/Header'



function App() {
  
  return (
   <>
   <Header/>
    <Routes>
      <Route path="/" element={<Feeds/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
   </>
  );
}

export default App;
