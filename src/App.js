
import Input from "./Input/Input"
import { InputData } from "./data";


function App() {
  return (
    <div className="flex justify-center items-center flex-col">
     <div className="w-1/2 h-full shadow-lg p-4 mt-20">
    <h3 className="font-bold text-2xl">Input Form</h3>
     {
      InputData && InputData.map((InputData,index)=>{
      return(
        <Input inputStyle={InputData.inputStyle} InputType={InputData.InputType} inputTitle={InputData.inputTitle} holder={InputData.holder}  minLength={InputData.minLength} maxLength={InputData.maxLength} disable={InputData.disable} required={InputData.required} />
      )
     })

     }
 <button className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-800 text-white my-10">Submit</button>
     </div>

    </div>
  );
}

export default App;
