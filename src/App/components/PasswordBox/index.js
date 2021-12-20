import { useState } from "react";
import { ButtonContainer, EnterButton, ErrorInformation, InputBox, InputField, PassBox } from "./styled";

const PasswordBox = ({ onPasswordCheck, onHideBox, setHideErrorMessage, hideErrorMessage }) => {
    const [inputValue, setInputValue] = useState("");

    const onChangeInputValueHandler = ({ target }) => {
        setInputValue(target.value);
        setHideErrorMessage(true);
    }

    const passwordCheckHandler = (event) => {
        event.preventDefault();
        onPasswordCheck(inputValue);
        setHideErrorMessage(false);
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
                    {!hideErrorMessage && <ErrorInformation>Password Incorrect</ErrorInformation>}
                </InputBox>
            </form>
        </PassBox >
    );
}

export default PasswordBox;