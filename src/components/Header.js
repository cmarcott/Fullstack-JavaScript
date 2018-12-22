import React from 'react';

const Header = ({ message }) => {
    return (
        <h2 className="Header text-center">
            {message}
        </h2>
    );
};

// You have to declare the prop type
Header.propTypes = {
    headerMessage: React.PropTypes.string
};

export default Header;