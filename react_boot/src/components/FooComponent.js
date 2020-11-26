import React from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';

const FooComponent = () => {
    return (
        <div>
            <Button variant="primary">Primary</Button>
            <Button variant="success">Success</Button>
            <Button variant="info">Info</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="link">Link</Button>
            <DropdownButton title="Dropdown Button">
                <Dropdown.Item>Item1</Dropdown.Item>
                <Dropdown.Item>Item2</Dropdown.Item>
                <Dropdown.Item>Item3</Dropdown.Item>
            </DropdownButton>
        </div>
    );
};

export default FooComponent;