import {HtmlParser} from 'react-html-parser'

export default function App() {
  
  return (
    <div>
      Hello! <br/>
      {HtmlParser(initialReq())}
    </div>
  )
}

async function initialReq(){
  const req = await fetch('/server')
  const text = await req.text()
  console.log(text)
  return text
}
