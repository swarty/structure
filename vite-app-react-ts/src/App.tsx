import {
  useState, 
} from 'react'
import reactLogo from '@/images/react.svg'
import '@/styles/App.css'

function App() {
  const [
    count,
    setCount,
  ] = useState(0);

  const a = ({
    a, b,
  }: Record<string, string>): string => {
    return a + b;
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button onClick={() => a({
          a: 'a',
          b: 'b',
        })}>
          test click
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App;
