import { Container, Title, Paper, TextInput, Select, Button } from '@mantine/core'

import { createFileRoute } from '@tanstack/react-router'
 
export const Route = createFileRoute('/_home/job/create/$id')({
  component: CreateJob,
})


function CreateJob () {
  return (
    <Container size={420} my={40}>
      <Title ta="center">
        Create Job
      </Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Title" placeholder="Job title" required />
        <TextInput label="Company" placeholder="" required />
        <TextInput label="Salary" placeholder="" required />
        <Select
        label="Experience"
        placeholder="Select your experience level"
        data={['Junior', 'Mid Level', 'Senior']}
        />
        <TextInput label="Place" placeholder="" required />
        <TextInput label="Description" placeholder="Job Description " required />
        <Button fullWidth mt="xl">
          Create Job
        </Button>
      </Paper>
    </Container>
  );
}