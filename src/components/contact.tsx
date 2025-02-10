import React from 'react';
import { Flex, SmartImage, Text } from '@/once-ui/components';
import { useInView } from 'react-intersection-observer';
import styles from './Contact.module.scss';
import globalStyles from '../app/Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneFlip, faCommentSms, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import { useWindowWidth } from '@/lib/windowWidth';

const Contact = (): JSX.Element => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const windowWidth = useWindowWidth();
  
  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        fillWidth
        paddingBottom="20"
        ref={ref}
        id="services"
        className={styles.container}
      >
        <h1 className={styles.heading}>
          Jak mě doženete
        </h1>
        <Flex
          justifyContent="space-around"
          ref={ref}
          gap="48"
          className={`${globalStyles.section} ${inView ? globalStyles.show : ''}`}
          id="contact"
        >
          <Flex alignItems='center' gap="12" mobileDirection="column">
            <Flex direction="row" gap="12" alignItems='center' justifyContent='center'>
              <div className={styles.iconContainer}>
                <FontAwesomeIcon icon={faPhoneFlip} className={styles.icon} />
                <FontAwesomeIcon icon={faCommentSms} className={styles.icon} />
                <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
              </div>
              <Text variant="heading-default-xl">
                <a href="tel:+420737887744">+420 737 88 77 44</a>
              </Text>
            </Flex>
            <Flex
              marginLeft='48'
            >
              <FontAwesomeIcon icon={faEnvelope} className={styles.emailIcon} />
              <Text variant="heading-default-xl">
                <a href="mailto:vaclav@ajtakproskoly.cz">vaclav@ajtakproskoly.cz</a>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="48"
          className={styles.aboutMe}
          alignItems="center"
          marginTop="24"
        >
          <Image
            alt="portrait"
            src="/images/vaclav2.jpg"
            className={styles.portrait}
            width={windowWidth < 820 ? 150 : 200}
            height={windowWidth < 820 ? 150 : 200}
          />
          <Text
            variant={windowWidth < 820 ? "heading-default-m" : "heading-default-l"}
            marginTop="40"
            marginBottom="40"
          >
            Jsem IT expert s více než dvacetiletou praxí ze soukromé i státní sféry. Starám se o školy v Praze a jižní části Středočeského kraje.
            Mám dvě školou povinné děti.
          </Text>
        </Flex>
        © 2025
      </Flex>
    </>
  );
};

export default Contact;
