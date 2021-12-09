import { render, screen } from "@testing-library/react";
import Error from './Error';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


describe('Error component', () => {
    it('Error renders', () => {
        render(<Router>
                    <Routes>
                            <Route path="/" 
                                   element={<Error />}></Route>
                    </Routes>
                </Router>
                );
    
        expect(screen.getByText(/error! check back later!/i)).toBeInTheDocument();
    });
});