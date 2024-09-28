import React from 'react';
import TextEditor from '../textEditor';

const QuickNoteWidget = () => {
    const handleSave = (text) => {
        // Handle saving the text to your backend or local storage
        console.log('Saved text:', text);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 mt-5">
            <h2 className="text-2xl font-bold mb-4">Quick Note</h2>
            <TextEditor onSave={handleSave} />
        </div>
    );
};

export default QuickNoteWidget;
