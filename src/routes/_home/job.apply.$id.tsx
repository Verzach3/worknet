import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/job/apply/$id')({
  component: () => <div>Hello /_home/job/apply/$id!</div>
})t";

export const Route = createFileRoute("/_home/job/apply/$id")({
	component: ApplyJob,
});

function ApplyJob() {
	const [value, setValue] = useState<File | null>(null);
	return (
		<Container mt={"xxl"}>
			<Group grow mt={"xl"} align={"center"}>
				<form>
        <TextInput
        label="Nombre"
        placeholder="Nombre completo"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
					<Text mt={"lg"}>Correo</Text>
					<Input
						mt={"md"}
						mr={"md"}
						ml={"md"}
						type="email"
						placeholder="Email"
					/>
					<FileInput
						value={value}
						onChange={setValue}
						label="Input label"
						description="Input description"
						placeholder="Input placeholder"
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Group>
		</Container>
	);
}
