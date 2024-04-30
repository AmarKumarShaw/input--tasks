
import Input from "./Input/Input"
import { InputData } from "./data";


function App() {
  return (
    <div className="App flex justify-center items-center flex-col">
      {console.log(InputData)}
     {
      InputData && InputData.map((InputData,index)=>{
      return(
        <Input inputStyle={InputData.inputStyle} InputType={InputData.InputType} inputTitle={InputData.inputTitle} holder={InputData.holder}  minLength={InputData.minLength} maxLength={InputData.maxLength} disable={InputData.disable} required={InputData.required} />
      )
     })

     }

 <button className="px-4 py-2 bg-blue-500 hover:bg-blue-800 text-white my-10">Submit</button>
    </div>
  );
}

export default App;
