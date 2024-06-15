import {
	Affix,
	Button,
	Checkbox,
	Container,
	Group,
	Input,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/_start-questions/questions/country")(
	{
		component: CountrySelector,
	},
);

const countries = [
	"Colombia",
	"Perú",
	"Chile",
	"Argentina",
	"Ecuador",
	"Venezuela",
	"Bolivia",
	"Paraguay",
	"Uruguay",
	"Brasil",
	"México",
	"Estados Unidos",
	"Canadá",
	"España",
	"Francia",
	"Alemania",
	"Italia",
	"Portugal",
	"Reino Unido",
	"Japón",
	"China",
	"Corea del Sur",
	"India",
	"Australia",
	"Nueva Zelanda",
	"Rusia",
	"Sudáfrica",
	"Nigeria",
	"Egipto",
];

function CountrySelector() {
	const [country, setCountry] = useState("");
	const [inputValue, setInputValue] = useState("");

	const filteredCountries = countries.filter((value) =>
		value.toLowerCase().includes(inputValue.toLowerCase()),
	);

	const items = filteredCountries.map((value) => (
		<Checkbox
			mt="xs"
			ml={33}
			label={value}
			key={value}
			checked={country === value}
			onChange={() => (country === value ? setCountry("") : setCountry(value))}
		/>
	));

	return (
		<Container>
			<Input
				mt={"xl"}
				ml={"sm"}
				mr={"sm"}
				placeholder="Country"
				leftSection={<IconSearch />}
				value={inputValue}
				onChange={(event) => setInputValue(event.currentTarget.value)}
			/>
			<Group align="left" style={{ flexDirection: "column" }} mt={"md"}>
				{items}
			</Group>
			<Affix position={{ bottom: 20, right: 20, left: 20 }}>
				<Group>
					<Button mt={"lg"} w={"100%"} type="submit">
						Siguiente
					</Button>
				</Group>
			</Affix>
		</Container>
	);
}
