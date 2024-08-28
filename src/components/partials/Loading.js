import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Spinner animation="grow" />
            <p className="mt-3">Please wait...</p>
        </div>
    );
};

export default Loading;
