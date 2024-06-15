import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Select 
} from '@mantine/core';

import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/register')({
  component: Register,
})


function Register() {
  return (
    <Container size={420} my={40}>
      <Title ta="center">
        Welcome!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already have an account?{' '}
        <Anchor size="sm" component="button">
         Sign In
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <PasswordInput label="Password" placeholder="Confirm your password" required mt="md" />
        <Select
        label="Role"
        placeholder="Select your role"
        data={['Employee', 'Employer']}
        />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Accept terms and conditions" />
        </Group>
        <Button fullWidth mt="xl">
          Sign Up
        </Button>
      </Paper>
    </Container>
  );
}