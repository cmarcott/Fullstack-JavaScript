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

// You could use .isRequired, or set default props
//App.defaultProps = {
//    headerMessage: 'Hello!!'
//};

export default Header;