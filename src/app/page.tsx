"use client";
import React from 'react';
import { Flex, SmartImage } from '@/once-ui/components';
import Image from 'next/image';
import { Header } from '@/once-ui/modules';
import Services from '@/components/services';
import Motto from '@/components/motto';
import Pricing from '@/components/pricing';
import Contact from '@/components/contact';
import { useState, useEffect } from 'react';
import styles from './Home.module.scss';


export default function Home() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div
			className={styles.background}
			id="home"
		>
			<Header />
			<Image
				src={windowWidth < 820 ? "/images/banner_mobile.png" : "/images/banner.png"}
				alt="Popis obrázku"
				layout="responsive"
				quality={100}
				width={windowWidth < 820 ? 800 : 1920}
      	height={windowWidth < 820 ? 600 : 1080}
				style={{ objectFit: "contain"}}
			/>
			<Motto />
			<Services />
			<Pricing />
			<Contact />
		</div>
	);
}


