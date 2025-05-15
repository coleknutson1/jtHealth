import './App.css'

function DrawBlock() {
  return (
    <div className='big-block'></div>
  );
}

function RedMethod({ children }) {
  return (
    <>
      <div className="set-red">{children}</div>
    </>
  )
}

export default function App() {
  return (
    <>
      <RedMethod> <DrawBlock></DrawBlock> </RedMethod>
    </>
  )
}