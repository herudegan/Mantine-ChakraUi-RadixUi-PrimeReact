import PasswordInput from "./utils/passwordInput/passwordInput"
import InputU from "./utils/input/input"

export default function Page() {

    return(
        <>
            <div style={{marginLeft: '22.5vw', marginTop: '30vh' }}>
                <div style={{width: '20vw', marginLeft: '17.5vw'}}>
                    <InputU/>
                    <PasswordInput/>
                </div>
            </div>
        </>
    )
}