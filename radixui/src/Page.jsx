import { Flex, Text, Button, TextField } from '@radix-ui/themes';

export default function Page() {
  return (
    <>
        <div style={{marginLeft: '22.5vw' }}>
            <div style={{width: '20vw', marginLeft: '17.5vw'}}>
                <Flex direction="column" gap="2">
                    <TextField.Input placeholder="Enter your email" />
                    <TextField.Input placeholder="Enter your password" />
                    <div style={{width: '10vw', marginLeft: '8vw'}}>
                        <Button size="3" variant="soft">Enter</Button>
                    </div>
                </Flex>
            </div>
        </div>
    </>
    
  );
}