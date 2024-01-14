import React from 'react';

const Loading = () => {
    return (
        <div style={
            { 
                height: "100vh", 
                display: "flex", 
                justifyContent: 'center', 
                alignItems: 'center' 
                }
                }>
            
            <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

        </div>
    );
}

export default Loading;