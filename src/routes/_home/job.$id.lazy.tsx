import {
	Affix,
	Button,
	Center,
	Container,
	Divider,
	Group,
	Stack,
	Text,
} from "@mantine/core";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_home/job/$id")({
	component: Job,
});

function Job() {
	return (
		<Container mt={"lg"} pb={"6rem"}>
			<Text fw={600}>Resumen del Trabajo</Text>
			<Stack
				w={"100%"}
				justify="center"
				align="center"
				mt={"lg"}
				mx={0}
				gap={0}
			>
				<Group grow w={"100dvw"}>
					<Stack>
						<Divider />
						<Group mx={"xs"} justify="space-between">
							<Text>Nivel del trabajo</Text>
							<Text ta={"end"}>Admin Superior</Text>
						</Group>
						<Divider />
					</Stack>
				</Group>
				<Group grow w={"100dvw"}>
					<Stack>
						<Divider />
						<Group mx={"xs"} justify="space-between">
							<Text>Educacion</Text>
							<Text ta={"end"}>-</Text>
						</Group>
						<Divider />
					</Stack>
				</Group>
				<Group grow w={"100dvw"}>
					<Stack>
						<Divider />
						<Group mx={"xs"} justify="space-between">
							<Text>Experiencia</Text>
							<Text ta={"end"}>Admin Superior</Text>
						</Group>
						<Divider />
					</Stack>
				</Group>
				<Group grow w={"100dvw"}>
					<Stack>
						<Divider />
						<Group mx={"xs"} justify="space-between">
							<Text>Sitio Web</Text>
							<Text ta={"end"}>Admin Superior</Text>
						</Group>
						<Divider />
					</Stack>
				</Group>
				<Group grow w={"100dvw"}>
					<Stack>
						<Divider />
						<Group mx={"xs"} justify="space-between">
							<Text>Vacantes</Text>
							<Text ta={"end"}>2</Text>
						</Group>
						<Divider />
					</Stack>
				</Group>
			</Stack>
			<Text mt={"lg"} fw={600}>
				Descripcion del trabajo:
			</Text>
			<Text mt={"md"}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
				laborum adipisci, tempore voluptate quisquam fugiat neque, impedit totam
				modi aliquam atque dolores quos corrupti nisi consectetur provident
				error distinctio illo. Magnam neque repellat distinctio totam odit,
				itaque non excepturi iste eligendi sit consequatur rem quis repudiandae
				voluptas amet. Ad ratione itaque et facere? Magnam ad id ducimus
				officia, repellendus aperiam! Voluptatibus repudiandae molestiae numquam
				aliquid velit consequatur voluptate, qui veniam totam ab quidem sequi
				culpa incidunt minima cum, laudantium soluta aut impedit exercitationem
				doloribus temporibus suscipit, nam accusantium nesciunt. Placeat.
				Placeat quo atque dolores culpa necessitatibus, alias tempore iste
				dolorem dolore ex voluptas eum magni debitis quia architecto voluptates,
				reprehenderit veritatis ratione eveniet pariatur deleniti! Dolorum
				eligendi distinctio tempora enim? Reiciendis quo ducimus ipsa suscipit
				maiores provident amet, recusandae corporis magni error voluptatum odio
				cupiditate fugit sunt! Placeat perspiciatis doloribus ipsam aperiam?
				Quibusdam ea voluptas dolorum commodi, est ducimus labore.
			</Text>
			<Affix position={{ bottom: 45 }} w={"100%"}>
				<Center>
					<Button radius={"xl"} w={"90%"}>Aplicar</Button>
				</Center>
			</Affix>
		</Container>
	);
}
