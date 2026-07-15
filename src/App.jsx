
const POSTS=[
  {id:1,title:"post 1"},
  {id:2,title:"post 2"},
]

function App() {
  return <h1>Hello</h1>;
}


function wait(duration){
  return new Promise(resolve=>setTimeout(resolve,duration))
}

export default App;
