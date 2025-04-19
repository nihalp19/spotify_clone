import { Button } from "./components/ui/button"
import { SignedOut,SignInButton,UserButton,SignedIn } from "@clerk/clerk-react"

function App() {

  return (
    <div className='bg-red-500'>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </div>
  )
}

export default App
