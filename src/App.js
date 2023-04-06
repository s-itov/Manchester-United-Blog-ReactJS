import { Routes, Route } from 'react-router-dom';
import { BlogProvider } from './contexts/blogContext';

import { Blogs } from "./components/Blogs/Blogs";
import { Create } from "./components/Create/Create";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/User/Login/Login";
import { Register } from "./components/User/Register/Register";
import { Details } from './components/Details/Details';
import { Edit } from './components/Edit/Edit';
import { Logout } from './components/User/Logout/Logout';
import { NotFound } from './components/NotFound/NotFound';
import { Author } from './components/Author/Author';
import { Creators } from './components/Creators/Creators';

function App() {
  
    return (
        <BlogProvider>
            <div id="box">
                <Header />
                <main>
                    <Routes>
                        <Route path='*' element={<NotFound />}/>
                        <Route path='/' element={<Home />}/>
                        <Route path='/author' element={<Author />}/>
                        <Route path='/blogs' element={<Blogs />}/>
                        <Route path='/create' element={<Create />}/>
                        <Route path='/creators' element={<Creators />}/>
                        <Route path='/blogs/:blogId' element={<Details />}/>
                        <Route path='/blogs/:blogId/edit' element={<Edit />}/>
                        <Route path='/login' element={<Login />}/>
                        <Route path='/logout' element={<Logout />}/>
                        <Route path='/register' element={<Register />}/>
                    </Routes>
                </main>
                <Footer />
            </div>
        </BlogProvider>
    );
}

export default App;
