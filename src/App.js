import './App.css';
import Movieapp from './Components/moviefolder/Movieapp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Moviedesc from './Components/moviefolder/Moviedesc'
//  import Trytodo from './Components/todolisttry/Trytodo';
// import TodoSentry from './Components/todolisttry/TodoSentry'
// import Movietry from './Components/todolisttry/Movietry';
// import MarvelApi from './Components/todolisttry/MarvelApi'

// import { Provider } from 'react-redux';
// import CounterApp from './Components/CounterApp/CounterApp';
// import store from './Components/reduxStore/store';
// import CounterNav from './Components/CounterApp/CounterNav';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Movieapp/>} />
          <Route path='/movie/:imdbID' element={<Moviedesc/>} />
        </Routes>
      </Router>

      {/* <MarvelApi />  */}
      {/* <Movietry /> */}
      {/* <Provider store={store}>
      <CounterNav />
      <CounterApp />
      {/* <TodoSentry /> */}
      {/* <Trytodo/> 
      </Provider>*/}
    </div>
  );
}

export default App;
