import React, { ChangeEvent, useCallback } from 'react';
import InputMask from 'react-input-mask';

interface MaskProps {
    value:string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ZipCodeMask:React.FC<MaskProps> = ({value, onChange}) => {
    return (
        <InputMask name="zipCode" id="zipCode" mask="99999-999" required placeholder="CEP" value = {value} onChange={onChange} />
    );
}

export default ZipCodeMask;