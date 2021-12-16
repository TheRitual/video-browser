import { useState } from "react";
import { EnterButton, ErrorInformation, InputBox, InputField, PassBox } from "./styled";

const PasswordBox = ({ onPasswordCheck, onHideBox, isPasswordCorrect, onPassChange }) => {
    const [inputValue, setInputValue] = useState("");

    const onChangeInputValueHandler = ({ target }) => {
        setInputValue(target.value);
        onPassChange(true);
    }

    return (
        <PassBox>
            <InputBox>
                <InputField placeholder="Open Sesame" value={inputValue} onChange={onChangeInputValueHandler} />
                <div>
                    <EnterButton onClick={() => onPasswordCheck(inputValue)}> Enter </EnterButton>
                    <EnterButton onClick={() => onHideBox()}> Close </EnterButton>
                </div>
                {!isPasswordCorrect && <ErrorInformation>Password is Incorrect</ErrorInformation>}
            </InputBox>
        </PassBox>
    );
}

export default PasswordBox;