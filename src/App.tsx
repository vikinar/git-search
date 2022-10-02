import './App.css'
import Layout from "./components/Layout/Layout";
import {
    BrowserRouter as Router,
    useRoutes,
} from "react-router-dom";

//Store
import {Provider} from "react-redux";
import {store} from "./store";

//Pages
import SearchPage from "./pages/SearchPage";
import UserPage from "./pages/UserPage";
import NotFound from "./pages/NotFound";


const Pages = () => useRoutes([
    {path: '*', element: <NotFound/>},
    {path: '/', element: <SearchPage/>},
    {path: 'users/:id', element: <UserPage />}
])

function App() {
    return (
        <Provider store={store}>
            <Layout>
                <Router>
                    <Pages/>
                </Router>
            </Layout>
        </Provider>
    )
}

export default App;
