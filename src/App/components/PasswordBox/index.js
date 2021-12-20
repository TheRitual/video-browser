import { useState } from "react";
import { EnterButton, InputBox, InputField, PassBox } from "./styled";

const PasswordBox = ({ onPasswordCheck, onHideBox, onPassChange }) => {
    const [inputValue, setInputValue] = useState("");

    const onChangeInputValueHandler = ({ target }) => {
        setInputValue(target.value);
        onPassChange(true);
    }

    const passwordCheckHandler = (event) => {
        event.preventDefault();
        onPasswordCheck(inputValue)
    }

    return (
        <PassBox>
            <InputBox>
                <form onSubmit={passwordCheckHandler}>
                    <InputField placeholder="Open Sesame" value={inputValue} onChange={onChangeInputValueHandler} />
                    <div>
                        <EnterButton type='submit' onClick={passwordCheckHandler}> Enter </EnterButton>
                        <EnterButton onClick={() => onHideBox()}> Close </EnterButton>
                    </div>
                </form>
            </InputBox>
        </PassBox >
    );
}

export default PasswordBox;