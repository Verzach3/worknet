import { AppShell, Button, Group } from "@mantine/core";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { IconChevronLeft } from "@tabler/icons-react";
export const Route = createFileRoute("/_home")({
	component: HomeLayout,
});

function HomeLayout() {
	return (
		<AppShell
			header={{
				height: 35,
			}}
		>
			<AppShell.Header>
				<Group grow justify="center">
					<Group>
						<Button variant="transparent" leftSection={<IconChevronLeft />}>
							Atras
						</Button>
					</Group>
				</Group>
			</AppShell.Header>
			<AppShell.Main>
				<Outlet />
			</AppShell.Main>
			<AppShell.Footer>
				<Group grow justify="center" align="center">
					<Group justify="center">
						<Button variant="transparent">
							<IconChevronLeft />
						</Button>
					</Group>
					<Group justify="center">
						<Button variant="transparent">
							<IconChevronLeft />
						</Button>
					</Group>
					<Group justify="center">
						<Button variant="transparent">
							<IconChevronLeft />
						</Button>
					</Group>
				</Group>
			</AppShell.Footer>
		</AppShell>
	);
}
