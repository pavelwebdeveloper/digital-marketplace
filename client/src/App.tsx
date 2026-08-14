import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { MarketplacePage } from "./pages/MarketplacePage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/products" replace />}
                />

                <Route
                    path="/products"
                    element={<MarketplacePage />}
                />

                <Route
                    path="/products/:id"
                    element={<ProductDetailsPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;