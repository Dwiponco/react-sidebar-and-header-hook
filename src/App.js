import './App.css';
import Sidebar from './component/sidebar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Overview from './pages/overview';
import Reports from './pages/reports';
import Report2 from './pages/report2';

function App() {
  return (
    <Router>
      <Sidebar/>
      <Switch>
        <Route path="/overview" exact component={Overview}/>
        <Route path="/reports" exact component={Reports}/>
        <Route path="/reports/reports1" exact component={Report2}/>
      </Switch>
    </Router>
  );
}

export default App;
