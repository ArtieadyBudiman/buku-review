import './App.css';
import { Routes, Route } from "react-router-dom";
import WritersPage from './pages/WritersPage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
      <>
         <Routes>
            <Route path="/" element={<WritersPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
         </Routes>
      </>

  );
}

export default App;
