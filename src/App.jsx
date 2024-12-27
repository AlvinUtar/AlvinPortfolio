import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Projects, Contact } from './pages';

const Fallback = () => (
  <div className="flex items-center justify-center w-full h-screen bg-slate-300/20">
    Loading...
  </div>
);

const ErrorFallback = ({ error }) => (
  <div className="flex items-center justify-center w-full h-screen bg-slate-300/20">
    <div>
      <h2>Something went wrong:</h2>
      <p>{error.message}</p>
    </div>
  </div>
);

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main className="bg-slate-300/20 h-full">
        <Router>
          <Navbar />
          <Suspense fallback={<Fallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Router>
      </main>
    </ErrorBoundary>
  );
}

export default App;