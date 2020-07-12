import React from 'react';
import 'style.scss';

type RootProps = {
    name?: string;
};

const Root: React.FC<RootProps> = ({ name }: RootProps) => {
    return <h3 className="title">Hello, {name}</h3>;
};

Root.defaultProps = {
    name: 'React',
};

export default Root;
