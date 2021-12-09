import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import New from "./New";

describe("New component", () => {
    it('renders New component', () => {
        render(<Router>
                    <Routes>
                        <Route path="/" element={<New />}/>
                    </Routes>
                </Router>);
        expect(screen.getByText(/new/i)).toBeInTheDocument();
        expect(screen.getAllByRole('textbox')).toHaveLength(2);
        fireEvent.change(screen.getAllByRole('textbox')[0], {
            target: {value: '#000'}
        });
        fireEvent.change(screen.getAllByRole('textbox')[1], {
            target: {value: '#fff'}
        });
        expect(screen.getAllByPlaceholderText('#...')).toHaveLength(2);
        expect(screen.getAllByRole('button')).toHaveLength(2);
        fireEvent.click(screen.getAllByRole('button')[0]);
        fireEvent.click(screen.getAllByRole('button')[1]);
        expect(screen.getByText(/add gradient/i)).toBeInTheDocument();
        expect(screen.getByText(/back/i)).toBeInTheDocument();
    });
});

