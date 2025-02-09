"use client";
import React from 'react';
import Image from 'next/image';
import { Header } from '@/once-ui/modules';
import Services from '@/components/services';
import Motto from '@/components/motto';
import Pricing from '@/components/pricing';
import Contact from '@/components/contact';
import { useWindowWidth } from '@/lib/windowWidth'
import styles from './Home.module.scss';


export default function Home() {
	const windowWidth = useWindowWidth();
	return (
		<div
			className={styles.background}
			id="home"
		>
			<div className={styles.container}>
				<Header />
				<Image
					src={windowWidth < 820 ? "/images/banner_mobile.png" : "/images/banner.png"}
					alt="Popis obrázku"
					layout="responsive"
					quality={100}
					width={windowWidth < 820 ? 400 : 1920}
					height={windowWidth < 820 ? 600 : 1080}
					style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
				/>
				<Motto />
			</div>
			<Services />
			<Pricing />
			<Contact />
		</div>
	);
}


