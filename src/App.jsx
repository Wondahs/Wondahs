import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  console.log('This is App')

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Content />} />
      </Routes>
    </Router>
  )
}

export default App
