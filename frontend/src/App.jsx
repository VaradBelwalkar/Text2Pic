import { useState } from "react"
import Header from "./components/Header"
import ImageResults from "./components/ImageResults"
import signup from "./components/signup"
function App() {
  const [listImages, setListImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  token
  if (token.length > 0{
  return (
    <div>
      <Header setListImages={setListImages} setIsLoading={setIsLoading} token={token}/>
      <ImageResults listImages={listImages} isLoading={isLoading} />
    </div>
  )}
else{
return (
<div>
  <signup/>
 </div>


)
}
}

export default App
