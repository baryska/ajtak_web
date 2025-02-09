import { Flex, Text } from '@/once-ui/components';
import React, { useEffect, useState } from 'react';
import styles from './Motto.module.scss';
import { useInView } from 'react-intersection-observer';
import globalStyles from '../app/Home.module.scss';
import Image from 'next/image';

const Motto = (): JSX.Element => {
  const [isEnded, setIsEnded] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      setIsEnded(!isEnded);
    }
  }, [inView]);

  return (
    <div
      className={styles.motto}
      ref={ref}
    >
      <div className={styles.textContainer1} >
        <Text
          as="div"
          className={styles.text}
        >
          Věnujte se tomu, co je opravdu podstatné.
        </Text>
        <Text
          as="div"
          className={styles.text}
          style={{ color: '#1e5e8e' }}
        >Vzdělávání
          <span className={styles.text} style={{ color: 'black' }}>.</span>
        </Text>
      </div>
      <div className={styles.textContainer2}>
        <Text
          as="div"
          marginBottom="16"
          className={styles.smallText}
        >
          Neřešte, jestli funguje <span className={styles.textBold}>Wi-Fi</span> nebo zda je připojený <span className={styles.textBold}>projektor</span>.
          Nenechte se rozptylovat nefunkčními <span className={styles.textBold}>počítači</span>, zapomenutými <span className={styles.textBold}>hesly</span> nebo nekonečnými <span className={styles.textBold}>aktualizacemi</span>.
        </Text>
      </div>
      <div className={styles.arrow}>
          {!isEnded ? (
            <Image
              src="/images/arrow.gif"
              alt="arrow"
              height={200}
              width={200}
              onLoad={() => {
                setTimeout(() => setIsEnded(true), 1000);
              }}
            />) : <Image
            src="/images/arrow.png"
            alt="arrow"
            height={200}
            width={200}
          />}
        </div>
    </div>
  );
};

export default Motto;
