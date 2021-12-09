import { render, screen, fireEvent } from "@testing-library/react";
import Gradient from "./Gradient";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const someColor = [{id: 1, firstColor: '#000', secondColor: '#fff'}];
const someFunc = jest.fn();

describe('Gradient component', () => {
    it('Gradient renders', () => {
        render(<Router>
                    <Routes>
                            <Route path="/" 
                                   element={<Gradient id={someColor[0].id} 
                                                      firstColor={someColor[0].firstColor} 
                                                      secondColor={someColor[0].secondColor} 
                                                      someFunc={someFunc}/>}/>
                    </Routes>
                </Router>
                );
        
        expect(screen.getByText('#000')).toBeInTheDocument();
        expect(screen.getByText('#fff')).toBeInTheDocument();
        expect(screen.getAllByRole('button')).toHaveLength(2);
        expect(screen.getByText(/✎/i)).toBeInTheDocument();
        expect(screen.getByText(/x/i)).toBeInTheDocument();
        fireEvent.click(screen.getAllByRole('button')[0]);         
    });
});