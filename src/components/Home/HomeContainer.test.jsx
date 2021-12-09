import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextColors from "../../contexts/ContextColors";
import HomeContainer, {removeGradient} from "./HomeContainer";



const colors = [{id: 1, firstColor: '#000', secondColor: '#fff'}, {id: 2, firstColor: '#eee', secondColor: '#000'}];


describe('HomeContainer Component', () => {
    it('HomeContainer renders', () => {
        render(<ContextColors.Provider value={colors}>
                    <Router>
                        <Routes>
                                <Route path="/" element={<HomeContainer />}/>
                        </Routes>
                    </Router>
               </ContextColors.Provider>);
        expect(screen.getByText(/home/i)).toBeInTheDocument();
        expect(screen.getByText(/add new gradient/i)).toBeInTheDocument();
        expect(screen.getAllByRole('button')).toHaveLength(5);
        expect(screen.getByRole('list')).toBeInTheDocument();
    });
    it('HomeContainer renders without data', () => {
        render(<Router>
                    <Routes>
                            <Route path="/" element={<HomeContainer />}/>
                    </Routes>
               </Router>);
         expect(screen.getByText(/home/i)).toBeInTheDocument();
         expect(screen.getByText(/add new gradient/i)).toBeInTheDocument();
         expect(screen.getByText(/please, add colors.../i)).toBeInTheDocument();
         expect(screen.getByRole('button')).toBeInTheDocument();
         expect(screen.queryByRole('list')).toBeNull();
    });
});