import React from "react";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
// import Gear from "./pages/gear";
import Equipments from "./pages/equipments";
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="*"/>
                <Route exact path="/Alexdoesvoices-reactsite" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* <Route
                    path="/gear"
                    element={<Gear />}
                /> */}
                <Route path="/blogs" element={<Blogs />} />
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                />
                <Route
                    path="/equipments"
                    element={<Equipments />}
                />
            </Routes>
        </Router>
    );
}
 
export default App;
