import { BrowserRouter, Routes, Route } from "react-router-dom"
import Start from "./pages/Start"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import MyPage from "./pages/MyPage"
import Alarm from "./pages/Alarm"

function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home" element={<MyPage />} />
                    <Route path="/alarm" element={<Alarm />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
