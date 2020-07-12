import React from 'react';
import './style.scss';

interface RootProps {
    name: string
}

const Root: React.FC<RootProps> = ({ name }) => {
    return (
        <h3 className="title">Hello, {name}</h3>
    )
}

export default Root;