'use client';
import { Flex } from '@/once-ui/components';
import { Link } from 'react-scroll';
import styles from './Header.module.scss';
import React from 'react';
import { useWindowWidth } from '@/lib/windowWidth';

const Header = () => {
    const windowWidth = useWindowWidth();
    return (
        <Flex
            as="header"
            fillWidth paddingX="m" height="56"
            alignItems="center"
            background="surface">
            <Flex
                fillWidth
                alignItems="center" justifyContent="flex-end">
                <Flex
                    textVariant="label-default-xl"
                    fillWidth gap="40" paddingX="l"
                    justifyContent={windowWidth < 820 ? "center" :"flex-end"}
                    alignItems="center">
                    <Link to="services" smooth={true} duration={1000} className={styles.link}>
                        Co nabízím
                    </Link>
                    <Link to="pricing" smooth={true} duration={1500} className={styles.link}>
                        Ceník
                    </Link>
                    <Link
                        to="contact"
                        className={styles.link}
                        smooth={true}
                        duration={2200}
                    >
                        Kontakt
                    </Link>
                </Flex>
            </Flex>

        </Flex>
    );
};

Header.displayName = 'Header';
export { Header };
