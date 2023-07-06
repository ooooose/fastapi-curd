import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import Task from './components/pages/Task';

function App() {
  return (
    <ChakraProvider>
      <Router>
          <Routes>
              <Route path="/tasks" element={<Task />} />
          </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
