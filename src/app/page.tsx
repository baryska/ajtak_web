"use client";
import React from 'react';
import { Flex, SmartImage } from '@/once-ui/components';
import { Header } from '@/once-ui/modules';
import Services from '@/components/services';
import Motto from '@/components/motto';
import Pricing from '@/components/pricing';
import Contact from '@/components/contact';
import styles from './Home.module.scss';


export default function Home() {
	return (
		<Flex
			fillWidth
			direction="column" alignItems="center" flex={1}
			className={styles.background}
			id="home"
		>
			<Header />
			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0"
				direction="column" alignItems="center" flex={1}
			>
					<SmartImage
						alt="banner"
						src="/images/banner.png"
						aspectRatio="20/6"
						objectFit="cover"
					/>
					<Motto />
				<Services />
				<Pricing />
				<Contact />
			</Flex>
		</Flex>
	);
}
