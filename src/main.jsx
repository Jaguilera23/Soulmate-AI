import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { FilterProvider } from './context/FilterProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <FilterProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </FilterProvider>,
)
