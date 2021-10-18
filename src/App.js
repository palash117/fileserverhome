import './App.css';
import { Provider } from 'react-redux';
import store from './Store';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import FolderView from './component/FolderView';
import Header from './component/Header';
import MagicastView from './component/MagicastView';

function App() {
  return (
    <Provider store={store}>
      <div className="ui container">
      <Router>
      <Header></Header>
          <Switch>
            <Route path="/cast"
            component={MagicastView}
            />
            <Route
            path="/:id"
            component ={FolderView}
            />
            <Route path="/"
            component={FolderView}
            />
          </Switch>
      </Router>
      </div>
    </Provider>
  );
}

export default App;
