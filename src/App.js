// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1 className="card">My First program in react</h1>
     <p className="yml-code"> name: CI <br></br>


on:<br></br>
  
  push:<br></br>
    branches: [ master ]<br></br>

    
  workflow_dispatch:<br></br>


jobs:<br></br>
  
  build:<br></br>
    
    runs-on: ubuntu-latest<br></br>
    <br></br>
    
    steps:<br></br>
      
      - uses: actions/checkout@v2<br></br>

      - name: install node <br></br><br></br>
        uses: actions/setup-node@v2-beta<br></br>
        with:<br></br>
          node-version: 12     <br></br><br></br>

        # INSTALL YARN   <br></br>
        
      - uses: borales/actions-yarn@v2.3.0<br></br>
        with:         <br></br>
          cmd: install <br></br><br></br>

      - name: build yarn<br></br>
        run: yarn build<br></br><br></br>
       
      - name: setup surge<br></br>
        run: npm install -global surge<br></br>
        
      - name: Execute Deployment with surge<br></br>
        {/* run: surge ./build projectreactdemo06012021.surge.sh --token $"{{secrets.REACT_DEMO_TOKEN}} */}


     </p>
    </div>
  );
}

export default App;
