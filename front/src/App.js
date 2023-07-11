import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import Task from './components/pages/Task';
import CreateTask from './components/pages/CreateTask';

function App() {
  return (
    <ChakraProvider>
      <Router>
          <Routes>
              <Route path="/tasks" element={<Task />} />
              <Route path="/tasks/create" element={<CreateTask />} />
          </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
