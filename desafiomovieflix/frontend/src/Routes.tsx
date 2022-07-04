import Navbar from "components/Navbar";
import PrivateRoute from "components/PrivateRoute";
import Home from "pages/Home";
import MovieCatalog from "pages/Private/MovieCatalog";
import MovieDetail from "pages/Private/MovieDetail";
import {  Route, Router, Switch } from "react-router-dom";
import history from "utils/history";

const Routes = () => (
    
    <Router history={history}>
        <Navbar />
        <Switch>
           
            <Route path="/" exact>
                <Home />
            </Route>

            <PrivateRoute path="/movies">
                <Route path="/movies" exact>
                    <MovieCatalog />
                </Route>

                <Route path="/movies/:movieId" >
                    <MovieDetail />
                </Route>
            </PrivateRoute>

        </Switch>
    </Router>
)

export default Routes;
