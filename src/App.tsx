import { GlobalStyle } from './GlobalStyle'
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext'
import AppRoutes from './pages/Routes'

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle/>
      <AppRoutes/>
    </ThemeProvider>
  )
}

export default App
