import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="layout">
                <Header />
                <div className="content">
                    <Sidebar />
                    <ProductList />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
