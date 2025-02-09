import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from 'classnames';
import { headers } from "next/headers";
import { Metadata } from "next";
import { baseURL, style, meta, og, schema, social } from "@/once-ui/resources/config"
import { Background, Flex } from '@/once-ui/components'
import { Roboto_Mono } from 'next/font/google';
import { Montserrat } from 'next/font/google';


const primary = Montserrat({
	variable: '--font-primary',
	subsets: ['latin'],
	display: 'swap'
});

const code = Roboto_Mono({
	variable: '--font-code',
	subsets: ['latin'],
	display: 'swap',
});

const secondary = Montserrat({
	variable: '--font-secondary',
	subsets: ['latin'],
	display: 'swap'
});

type FontConfig = {
	variable: string;
};

const tertiary: FontConfig | undefined = undefined;


export async function generateMetadata(): Promise<Metadata> {
	const host = (await headers()).get("host");
	const metadataBase = host ? new URL(`https://${host}`) : undefined;

	return {
		title: meta.title,
		description: meta.description,
		openGraph: {
			title: og.title,
			description: og.description,
			url: 'https://' + baseURL,
			type: og.type as
				| "website"
				| "article"
				| "book"
				| "profile"
				| "music.song"
				| "music.album"
				| "music.playlist"
				| "music.radio_station"
				| "video.movie"
				| "video.episode"
				| "video.tv_show"
				| "video.other",
		},
		metadataBase,
	};
}

const schemaData = {
	"@context": "https://schema.org",
	"@type": schema.type,
	"url": "https://" + baseURL,
	"logo": schema.logo,
	"name": schema.name,
	"description": schema.description,
	"email": schema.email,
	"sameAs": Object.values(social).filter(Boolean)
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Flex
			as="html" lang="en"
			fillHeight background="page"
			data-neutral={style.neutral} data-brand={style.brand} data-accent={style.accent}
			data-border={style.border} data-theme={style.theme}
			data-solid={style.solid} data-solid-style={style.solidStyle}
			data-surface={style.surface} data-transition={style.transition}
			data-scaling={style.scaling}
			className={classNames(
				primary.variable, code.variable,
				secondary ? secondary.variable : '',
				tertiary ? tertiary.variable : ''
			)}>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
				/>
				{/* <link rel="icon" href={schema.logo} /> */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Bad+Script&family=Devonshire&family=Ms+Madi&family=Oooh+Baby&family=Playwrite+CZ:wght@100..400&family=Fuzzy+Bubbles:wght@400;700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Kavivanar&family=Special+Elite&family=Yomogi&family=Patrick+Hand+SC&family=Quicksand:wght@300..700&family=Alfa+Slab+One&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
			</head>
			<Flex
				as="body"
				fillWidth fillHeight margin="0" padding="0">
				<Background
					style={{ zIndex: '-1' }}
					position="fixed"
					mask="cursor"
					dots={{
						display: true,
						opacity: 0.4,
						size: '20'
					}}
					/>
				<Flex
					flex={1} direction="column">
					{children}
				</Flex>
			</Flex>
		</Flex>
	);
}
