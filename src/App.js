import logo from './logo.svg';

import './App.scss';

import './Header.scss';
import { SideBar } from './components/sideBar/SideBar';
import { RedesSociales } from './components/redersSociales/RedesSociales';

function App() {
  return (
   <>
  
     <div className="pagina">
        <header>
          <div className="content">
            <div className="title">
                <h1>Chopsticks</h1>
                <h2>Sushi y mas!</h2>
            </div>
             <RedesSociales/>
          </div>
        <SideBar className="sideBar"/>
        </header>

        <main>
          <div className="content">
            
          </div>
        </main>
     </div>
   </>
  );
}

export default App;
