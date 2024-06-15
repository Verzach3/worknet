import { AppShell, Button, Group } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_start-questions")({
	component: StartQuestionsLayout,
});

function StartQuestionsLayout() {
	return (
		<AppShell
			header={{
				height: 50,
			}}
		>
			<AppShell.Header>
				<Group grow justify="center" align="center" h={"100%"} >
					<Group>
						<Button size="compact-xl" variant="transparent" leftSection={<IconChevronLeft />}>
							Login
						</Button>
					</Group>
				</Group>
			</AppShell.Header>
			<AppShell.Main>
				<Outlet />
			</AppShell.Main>
		</AppShell>
	);
}
