import StarComponent from "./StarComponent";


const App = ()=>{


  return (
    <div className="w-screen h-screen flex flex-col gap-10 justify-center items-center">
      Start Component
      <StarComponent starCount = {10}/>
    </div>
  )
}
export default App;