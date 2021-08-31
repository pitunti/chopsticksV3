import logo from './logo.svg';

import './App.scss';
import { SideBar } from './components/sideBar/SideBar';

function App() {
  return (
   <>
     <div className="pagina">
        <header>
           <div className="title">
              <h1>Chopsticks</h1>
              <small>Sushi y mas!</small>
           </div>
           <SideBar/>
        </header>

        <main>
          Hola
        </main>
     </div>
   </>
  );
}

export default App;
