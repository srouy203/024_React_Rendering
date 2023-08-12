import './App.css';
// import UseState from './Components/UseState/UseState';
// import UseReducer from './Components/UseReducer/UseReducers';
// import ObjectUseState from './Components/ImmutabilityState/ObjectUseState';
// import ArrayUseState from './Components/ImmutabilityState/ArrayUseState';
// import ParentOne from './Components/UnnessesaryRender/ParentOne';
// import ChildOne from './Components/UnnessesaryRender/ChildOne';
// import ParentTwo from './Components/React memo/ParentTwo';
import ParentThree from './Components/UseMemo and UseCallback/ParentThree';

function App() {
  return (
    <div className='App'>

      {/* <UseState/> */}
      {/* <UseReducer/> */}
      {/* <ObjectUseState/> */}
      {/* <ArrayUseState/> */}
      {/* <ParentOne>
        <ChildOne/>
      </ParentOne> */}

      {/* <ParentTwo/> */}

      <ParentThree/>

    </div>
  );
}

export default App;
