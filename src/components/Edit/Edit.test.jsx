import { render, screen, fireEvent } from "@testing-library/react";
import Edit from './Edit';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const editFirstColor = '#000';
const editSecondColor = '#fff';
const someFunc = jest.fn();

describe('Edit component', () => {
    it('Edit renders', () => {
        render(<Router>
                    <Routes>
                            <Route path="/" 
                                   element={<Edit editFirstColor={editFirstColor} 
                                                  editSecondColor={editSecondColor} 
                                                  someFunc={someFunc}/>}/>
                    </Routes>
                </Router>
                );
        
        expect(screen.getAllByRole('textbox')).toHaveLength(2);
        fireEvent.change(screen.getAllByRole('textbox')[0], {
            target: {value: '#000'}
        });
        fireEvent.change(screen.getAllByRole('textbox')[1], {
            target: {value: '#fff'}
        });
        expect(screen.getByDisplayValue('#000')).toBeInTheDocument();
        expect(screen.getByDisplayValue('#fff')).toBeInTheDocument();
        expect(screen.getAllByRole('button')).toHaveLength(2);
        fireEvent.click(screen.getAllByRole('button')[0]);
        fireEvent.click(screen.getAllByRole('button')[1]);
        expect(screen.getByText(/save gradient/i)).toBeInTheDocument();
        expect(screen.getByText(/back/i)).toBeInTheDocument();
    });
});