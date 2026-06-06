# JWT Secret Generator
A simple app built with Vite + React + Typescript that generates JWT Secrets for the user.
## Link to the app
https://jwt-secret-generator-navy.vercel.app
## How it works
### My app utilises the window.crypto API to generate a random and higly secure key.
```typescript
    function generateSecret(){
    const randomBytes = new Uint8Array(32)
    window.crypto.getRandomValues(randomBytes)
    let generatedKey = Array.from(randomBytes).map(byte => byte.toString(16).padStart(2,'0')).join('')
    setSecret(generatedKey)
    setCopied(false)
  }
```
