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
					className={styles.desktopBanner}
					src="/images/banner.png"
					alt="banner"
					priority
					layout="responsive"
					quality={100}
					width={1920}
					height={1080}
				/>
				<Image
					className={styles.mobileBanner}
					src="/images/banner_mobile.png"
					alt="banner"
					priority
					layout="responsive"
					quality={100}
					width={600}
					height={800}
				/>
				<Motto />
			</div>
			<Services />
			<Pricing />
			<Contact />
		</div>
	);
}


