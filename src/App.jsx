import { useState } from "react";
import { data } from './content/data.json';


function App() {
  const [dataList, setDataList] = useState([...data])

  return (
    <div className="w-full p-36 ">
      {/* Code here */}
      <div className="bg-white rounded-xl w-full h-full p-5">
        Content
      </div>
    </div>
  )
}

export default App
