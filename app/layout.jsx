import '@styles/globals.css';
import Nav from '@components/Nav'

export const metadata = {
    title: "Promptopia",
    description: "Discover and Share AI Prompts"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>

            </div>
            <main className='apps'>
                <Nav />
                {children}
            </main>
        </body>

    </html>
  )
}

export default RootLayout
