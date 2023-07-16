import { useEffect, useState } from "react"

export default function App() {
  const [text, setText] = useState()
  useEffect(() =>{
    async function initialReq(){
      const req = await fetch('/server')
      const text = await req.text()
      console.info(text)
      return text
    }

    setText(initialReq())
  },[])

  return (
    <div>
      Hello! <br/>
      {text}
    </div>
  )
}


