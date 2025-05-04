import React from "react";

export default function NotFound() {
    return (
        <div className="text-center py-5">
            <h1>404</h1>
            <p>Stránka nenalezena</p>
            <a href="/" className="btn btn-primary mt-3">Zpět na domov</a>
        </div>
    );
}
