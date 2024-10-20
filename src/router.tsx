import { BrowserRouter, Routes, Route } from "react-router-dom"
import Start from "./pages/Start"

function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Start />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
