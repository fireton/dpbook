import React from 'react';
import './BookPage.css';

interface BookPageProps {
    pageNumber: number;
}

function BookPage({pageNumber} : BookPageProps) {
    const bgImage = './pages/page1/background.jpg';
    const bgStyle = {
        backgroundImage: `url(${bgImage})`,
    };
    return (
        <div className="page" style={bgStyle}>
            <p>Page {pageNumber}</p>
        </div>
    );
}

export default BookPage;