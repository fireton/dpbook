import React, { useEffect, useState } from 'react';
import './BookPage.css';
import { BookTextbox } from './interfaces';

interface BookPageProps {
    pageNumber: number;
}

function BookPage({pageNumber} : BookPageProps) {
    const [bgImage, setBgImage] = useState('');
    const [textBoxes, setTextBoxes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setBgImage(`./pages/page${pageNumber}/background.jpg`);
            const response = await fetch(`./pages/page${pageNumber}/config.json`);
            const data = await response.json();
            setTextBoxes(data.textboxes);
            setIsLoading(false);
            console.log(data);
        };
        fetchData();
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const bgStyle = {
        backgroundImage: `url(${bgImage})`,
    };
    return (
        <div className="page" style={bgStyle}>
            <p>Page {pageNumber}</p>
            {
            textBoxes.map((textBox: BookTextbox, index: number) => {
                const textBoxStyle = { 
                    top: `${textBox.x}px`, 
                    left: `${textBox.y}px`, 
                    width: textBox.width, 
                    height: textBox.height 
                };
                return (
                    <div key={index} className="text-box" style={textBoxStyle}>
                        <p>{textBox.text}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default BookPage;