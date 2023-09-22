import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

export default function Page() {
  return (
    <>
        <div style={{marginLeft: '22.5vw', marginTop: '30vh' }}>
            <div style={{width: '20vw', marginLeft: '17.5vw'}}>
                <InputText type='text' className="p-inputtext-sm" placeholder='Email' style={{marginBottom: '1vh'}}/>
                <Password className="p-inputtext-sm" placeholder='Senha' toggleMask style={{marginBottom: '1vh'}}/><br/>
                <Button label='Enviar' style={{marginLeft: '4vw'}}/>
            </div>
        </div>
    </>
    
  );
}