import React from 'react';

const Mark: React.FC = () => {
    return (
        <div className="absolute bottom-0 left-0 right-0 py-4 z-[60]">
            <p className="text-center text-sm text-white opacity-90 bg-black/20 rounded-lg mx-4 py-2">
                <a href="https://peamz4.in.th" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">peamz4</a> X BU OPENHOUSE 2025 
                {/* - Powered by <a href="https://aona.co.th" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">AONA</a> & <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">CoDeแ Community</a> */}
            </p>
        </div>
    );
};

export default Mark;