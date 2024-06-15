import {
	Button,
	Group,
	Stack,
	Text,
	TextInput,
	ThemeIcon,
	Title,
} from "@mantine/core";
import { IconBrandApple, IconBrandGoogle } from "@tabler/icons-react";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/login")({
	component: Login,
});

function Login() {
	return (
		<div>
			<Group grow mt={"4rem"}>
				<Stack align="center" gap={"xs"} w={"100%"}>
					<Title order={3} mx={"xs"}>
						Bienvenido a
					</Title>
					<Title>WorkNet</Title>
					<TextInput mt={"5rem"} w={"90%"} label="Email" radius={"md"} />
					<TextInput
						mt={"sm"}
						w={"90%"}
						label="Contraseña"
						type="password"
						radius={"md"}
					/>
					<Button w={"90%"} mt={"lg"} radius={"md"}>
						Ingresar
					</Button>
					<Group mt={"md"}>
						<ThemeIcon size={"lg"} color="red" radius={"md"}>
							<IconBrandGoogle />
						</ThemeIcon>
						<ThemeIcon size={"lg"} color="gray" radius={"md"}>
							<IconBrandApple />
						</ThemeIcon>
					</Group>
					<Text mt={"xl"}>¿No tienes una cuenta?</Text>
					<Text c={"blue"}>Registrate</Text>
				</Stack>
			</Group>
		</div>
	);
}
