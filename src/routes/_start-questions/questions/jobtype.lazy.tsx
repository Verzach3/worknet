import {
	Button,
	Card,
	Container,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/_start-questions/questions/jobtype")(
	{
		component: JobTypeSelector,
	},
);

function JobTypeSelector() {
	const [type, setType] = useState<"job" | "employee">("job");
	return (
		<Container mt={"2rem"}>
			<Text fw={500}>
				Estas buscando un trabajo o estas buscando contratar un empleado?
			</Text>
			<Stack mt={"4rem"} gap={"xl"}>
				<Stack>
					<Card
						onClick={() => setType("job")}
						withBorder
						radius={"xl"}
						bg={type === "job" ? "gray.3" : "gray.1"}
						style={
							type === "job"
								? {
										borderColor: "darkblue",
									}
								: {}
						}
					>
						<Title order={2} ta={"center"}>
							Encontrar un trabajo
						</Title>
						<Text ta={"center"} mt={"sm"}>
							Quiero encontrar un trabajo
						</Text>
					</Card>
					<Card
						onClick={() => setType("employee")}
						withBorder
						radius={"xl"}
						bg={type === "employee" ? "gray.3" : "gray.1"}
						style={
							type === "employee"
								? {
										borderColor: "darkblue",
									}
								: {}
						}
					>
						<Title order={2} ta={"center"}>
							Encontrar un empleado
						</Title>
						<Text ta={"center"} mt={"sm"}>
							Quiero encontrar un empleado
						</Text>
					</Card>
				</Stack>
				<Stack mt={"6rem"} w={"100%"}>
					<Button size="lg" radius={"xl"}>
						Siguiente
					</Button>
				</Stack>
			</Stack>
		</Container>
	);
}
