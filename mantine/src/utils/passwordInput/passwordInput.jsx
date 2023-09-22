import { PasswordInput, Text, Group, Anchor } from '@mantine/core';

export function PasswordInputUtils() {
  return (
    <>
      <Group justify="space-between" mb={5}>
        <Text component="label" htmlFor="your-password" size="sm" fw={500}>
          Sua Senha
        </Text>
      </Group>
      <PasswordInput placeholder="Sua Senha" id="your-password" />
    </>
  );
}