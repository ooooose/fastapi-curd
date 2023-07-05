import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Task from './components/pages/Task';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/tasks" element={<Task />} />
        </Routes>
    </Router>
  );
}

export default App;
