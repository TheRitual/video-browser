import { useState } from "react";
import { ButtonContainer, EnterButton, InputBox, InputField, PassBox } from "./styled";

const PasswordBox = ({ onPasswordCheck, onHideBox, onPassChange }) => {
    const [inputValue, setInputValue] = useState("");

    const onChangeInputValueHandler = ({ target }) => {
        setInputValue(target.value);
        onPassChange(true);
    }

    const passwordCheckHandler = (event) => {
        event.preventDefault();
        onPasswordCheck(inputValue)
        console.log('Checking Password');
    }

    return (
        <PassBox>
            <form onSubmit={passwordCheckHandler}>
                <InputBox>
                    <InputField placeholder="Open Sesame" value={inputValue} onChange={onChangeInputValueHandler} />
                    <ButtonContainer>
                        <EnterButton type='submit' onClick={passwordCheckHandler}> Enter </EnterButton>
                        <EnterButton onClick={() => onHideBox()}> Close </EnterButton>
                    </ButtonContainer>
                </InputBox>
            </form>
        </PassBox >
    );
}

export default PasswordBox;