import Header from './Header';
import Main from "./Main"
import Search from './Search';
function App() {
  return (
    <>
      <div className="flex container mx-auto px-32 ">
        <Header  />
        <Main/>
        <Search/>
        <div></div>
      </div>
    </>
  );
}

export default App;
