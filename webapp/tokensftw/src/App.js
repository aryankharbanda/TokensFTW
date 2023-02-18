import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import './App.css';
// arcana
import { Auth, useAuth } from "@arcana/auth-react";

import Navbar from './components/js/navbar';
import Login from './components/js/login';
import InitializeNFT from './components/js/initializeNFT';
import BuyStake from './components/js/buyStake';
import SellStake from './components/js/sellStake';
import Tenants from './components/js/tenants';
import OwnerDashboard from './components/js/ownerDashboard';
import StakeHolderDashboard from './components/js/stakeHolderDashboard';
import TenantDashboard from './components/js/tenantDashboard';
import PropertyRent from './components/js/propertyRent';

// arcana
const onLogin = () => {
    // Route to authenticated page

}

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
};

function App() {
    const auth = useAuth();
    return (
        <div>
            <div>
                {auth.loading ? (
                    "Loading"
                ) : auth.isLoggedIn ? (
                    <p>Logged In</p>
                ) : (
                    <div>
                        <Auth externalWallet={true} theme={"light"} onLogin={onLogin} />
                    </div>
                )}
            </div>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Login />} />
                            <Route path="owner-dashboard" element={<OwnerDashboard />} />
                            <Route path="stakeholder-dashboard" element={<StakeHolderDashboard />} />
                            <Route path="tenant-dashboard" element={<TenantDashboard />} />
                            <Route path="initialize-nft" element={<InitializeNFT />} />
                            <Route path="buy-stake" element={<BuyStake />} />
                            <Route path="sell" element={<SellStake />} />
                            <Route path="tenants" element={<Tenants />} />
                            <Route path="property-rent" element={<PropertyRent />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;