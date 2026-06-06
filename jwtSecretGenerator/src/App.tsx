import { useState} from 'react'
import './App.css'
import Github from './Github'
export default function App() {
  const [secret,setSecret] = useState<string>("")
  const [copied,setCopied] = useState<boolean>(false)
  const [generated,setGenerated] = useState<boolean>(false)
  function generateSecret(){
    const randomBytes = new Uint8Array(32)
    window.crypto.getRandomValues(randomBytes)
    let generatedKey = Array.from(randomBytes).map(byte => byte.toString(16).padStart(2,'0')).join('')
    setSecret(generatedKey)
    setCopied(false)
  }
  return (
    <div className='text-white-100 bg-gray'>
      <div className={`h-screen flex justify-center items-center font-mono p-4 text-2xl flex-col`}>
      <div className='flex justify-center items-center flex-col'>
        <h1>JWT Secret Generator</h1>
      </div>
      <div className='flex justify-center items-center flex-col m-4 p-2'>
      <button className='border border-black rounded-lg p-2' onClick={()=>{
        if(generated === false){
          generateSecret()
          setGenerated(true)
          setTimeout(() => {
            setGenerated(false)
          }, 1000);
        }
      }}>{generated === false? 'Generate' : 'Generated'}</button>
      {secret.length > 0 && (
        <div className='flex justify-center items-center flex-col'>
          <h1 className='text-xl m-2'>{secret}<button className='border border-black rounded-lg p-2 m-2' onClick={()=>{
            setCopied(true)
            navigator.clipboard.writeText(secret)
            setTimeout(()=>{
              setCopied(false)
            },3000)
          }}>{copied === false ? 'Copy' : 'Copied'}</button></h1>
        </div>
      )}
      {secret.length === 0 && (
        <div className='flex justify-center items-center flex-col'>
          <h1 className='text-xl m-2'>-</h1>
        </div>
      )}
    </div>
    <Github />
    </div>
    </div>
  )
}
