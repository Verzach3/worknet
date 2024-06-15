import {
	Badge,
	Card,
	Container,
	Group,
	Input,
	Text,
	ThemeIcon,
} from "@mantine/core";
import { createLazyFileRoute } from "@tanstack/react-router";
import { IconBrandApple, IconBrandGoogle, IconSearch } from "@tabler/icons-react";
import { useState } from "react";

export const Route = createLazyFileRoute("/_home/main-view/")({
	component: MainView,
});

function MainView() {
	const [inputValue, setInputValue] = useState("");
	return (
		<Container>
			<Input
				mt={"xl"}
				placeholder="Buscar..."
				rightSection={<IconSearch />}
				value={inputValue}
				onChange={(event) => setInputValue(event.currentTarget.value)}
			/>
			<Group grow align="left" style={{ flexDirection: "column" }}>
				<Text mt={"xl"}>Recomendaciones</Text>
				<Group grow justify="center">
					<Card withBorder mt={"lg"} radius={"lg"} bg={"gray.1"} shadow="xs">
						<Group grow justify="space-between">
							<Group>
								<ThemeIcon>
									<IconBrandGoogle />
								</ThemeIcon>
								<Text>Google</Text>
							</Group>
							<Group justify="end" align="center">
								<Text>Full Time</Text>
							</Group>
						</Group>
						<Text mt={"md"}>UI/UX Designer</Text>
						<Group grow mt={"md"}>
							<Group grow>
								<Text>$10,000 - $20,000 / Month</Text>
							</Group>
							<Group justify="end">
								<Badge>Onsite</Badge>
							</Group>
						</Group>
					</Card>
				</Group>
			</Group>
      <Group mt={'xl'} grow align="left" style={{ flexDirection: "column" }}>
        <Text mt={"lg"}>Vacantes recientes</Text>
        <Group grow justify="center">
					<Card withBorder mt={"lg"} radius={"lg"} bg={"gray.1"} shadow="xs">
						<Group grow justify="space-between">
							<Group>
								<ThemeIcon>
									<IconBrandApple />
								</ThemeIcon>
								<Text>Mercado Libre</Text>
							</Group>
							<Group justify="end" align="center">
								<Text>Full Time</Text>
							</Group>
						</Group>
						<Text mt={"md"}>Marketing</Text>
						<Group grow mt={"md"}>
							<Group grow>
								<Text>$5,000 - $8,000 / Month</Text>
							</Group>
							<Group justify="end">
								<Badge>Remote</Badge>
							</Group>
						</Group>
					</Card>
				</Group>
      </Group>
		</Container>
	);
}
