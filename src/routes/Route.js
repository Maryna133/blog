import React from "react"
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import{MainPage} from './pages/MainPages'
import { AuthPage } from './pages/AuthPage'
import{SignPage} from './pages/SignPage'
 
export const useRoutes = isAuthenticated =>{
    if(isAuthenticated){
        return(
            <BrowserRouter>
            <Routes>
            <Route path="/auth" exact element={<AuthPage/>} />
            <Route path="/main" exact element={<MainPage/>} />
            <Route path="/sign" exact element={<SignPage/>} />

            </Routes>
            </BrowserRouter>
            
        )
    }

    return(
        <Routes>
            <Route path="/" exact element={ <AuthPage />}>
               
            </Route>

        </Routes>
    )

}