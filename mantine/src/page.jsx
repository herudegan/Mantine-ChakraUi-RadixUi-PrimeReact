import { PasswordInputUtils } from "./utils/passwordInput/passwordInput"
import { HeaderMenu } from "./utils/header/headerMenu"
import { AutocompleteLoading } from "./utils/floatingLabel/autocomplete.Tsx"

export default function Page() {

    return(
        <>
            <HeaderMenu/>
            <div style={{marginLeft: '22.5vw' }}>
                <div style={{width: '20vw', marginLeft: '17.5vw'}}>
                    <AutocompleteLoading/>
                    <PasswordInputUtils/>
                </div>
            </div>
        </>
    )
}