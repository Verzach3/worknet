import { Container, Group, Paper, Avatar, TextInput, Select, Button, Text } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
import { z } from 'zod';
import * as classnames from "@/styles/userProfile/floatingLabel.modules.css";

export const Route = createLazyFileRoute('/_home/user/')({
  component: UserProfile
})

function UserProfile() {
	const [dateValue, setDateValue] = useState<Date | null>(null);

	const [focused, setFocused] = useState(false);
	const [value, setValue] = useState("");
	const floating = value.trim().length !== 0 || focused || undefined;
	const form = useForm({
		initialValues: {
			firstName: "",
			email: "",
			username: "",
		},
		validate: {
			firstName: (val) =>
				z.string().min(4).max(20).safeParse(val).success
					? null
					: "El nombre debe tener entre 4 y 20 caracteres",
			email: (val) =>
				z.string().email().safeParse(val).success
					? null
					: "El correo es invalido",
			username: (val) =>
				z.string().min(4).max(20).safeParse(val).success
					? null
					: "El nombre debe tener entre 4 y 20 caracteres",
		},
	});
	return (
		<Container mt={"md"}>
			<Group grow>
				<Paper radius="md" withBorder p="md" bg="var(--mantine-color-body)">
					<Avatar
						src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
						size={100}
						radius={120}
						mx="auto"
						onClick={() => console.log("Avatar clicked")}
					/>
					<Text ta="center" fz="lg" fw={500} mt="md">
						Jane Fingerlicker
					</Text>
					<Text ta="center" c="dimmed" fz="sm">
						jfingerlicker@me.io
					</Text>
				</Paper>
			</Group>
			<Group grow>
				<form onSubmit={form.onSubmit((values) => console.log(values))}>
					<TextInput
						label="Nombre completo"
						placeholder="Ingrese su nombre completo"
						required
						classNames={classnames}
						onFocus={() => setFocused(true)}
						onBlur={() => setFocused(false)}
						mt="md"
						autoComplete="nope"
						data-floating={floating}
						labelProps={{ "data-floating": floating }}
						{...form.getInputProps("firstName")}
					/>
					<TextInput
						label="Correo"
						placeholder="Ingrese su correo"
						required
						classNames={classnames}
						mt="md"
						autoComplete="nope"
						data-floating={floating}
						labelProps={{ "data-floating": floating }}
						{...form.getInputProps("email")}
					/>
					<TextInput
						label="Username"
						placeholder="Ingrese un nick de usuario"
						required
						classNames={classnames}
						mt="md"
						autoComplete="nope"
						data-floating={floating}
						labelProps={{ "data-floating": floating }}
						{...form.getInputProps("username")}
					/>
					<DatePickerInput
						label="Fecha de nacimiento"
						placeholder="Seleccione una fecha"
						required
						mt="md"
						value={dateValue}
						onChange={setDateValue}
					/>
					<Select
						label="País"
						placeholder="Ingrese su país"
						data={[
							"Colombia",
							"Perú",
							"Argentina",
							"Chile",
							"Ecuador",
							"Venezuela",
							"Bolivia",
							"Paraguay",
							"Uruguay",
							"Brasil",
							"México",
							"Estados Unidos",
						]}
						required
						mt="md"
						data-floating={floating}
						labelProps={{ "data-floating": floating }}
					/>
          <Select
            label="Género"
            placeholder="Seleccione su género"
            data={["Masculino", "Femenino", "Otro"]}
            required
            mt="md"
            data-floating={floating}
            labelProps={{ "data-floating": floating }}
          />
					<Button mt={"xl"} w={"100%"} type="submit">
						Guardar
					</Button>
				</form>
			</Group>
		</Container>
	);
}
