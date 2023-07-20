import React from 'react';

interface Props {
    onChange: () => void;
    value: any;
    placeholder: string;
    type: string;
    setValue: any
}

type RegistartionProps = {
    handleHideReg: () => void;
};

const Input = (props: Props) => {
    return (
        <input onChange={(event) => props.setValue(event.target.value)}
            value={props.value} type={props.type} placeholder={props.placeholder}/>
    );
};

export default Input;