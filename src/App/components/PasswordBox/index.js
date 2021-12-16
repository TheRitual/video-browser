import { useState } from "react";
import { EnterButton, InputBox, InputField, PassBox } from "./styled";

const PasswordBox = ({ onPasswordCheck, onHideBox, isPasswordCorrect }) => {
    const [inputValue, setInputValue] = useState("");

    const onChangeInputValueHandler = ({ target }) => {
        setInputValue(target.value);
    }

    return (
        <PassBox>
            <InputBox>
                <InputField placeholder="Open Sesame" value={inputValue} onChange={onChangeInputValueHandler} />
                <div>
                    <EnterButton onClick={() => onPasswordCheck(inputValue)}> Enter </EnterButton>
                    <EnterButton onClick={() => onHideBox()}> Close </EnterButton>
                </div>
            </InputBox>
        </PassBox>
    );
}

export default PasswordBox;