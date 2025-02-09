import React from 'react';
import { Flex } from '@/once-ui/components';
import { useInView } from 'react-intersection-observer';
import styles from './Pricing.module.scss';
import globalStyles from '../app/Home.module.scss';
import { useWindowWidth } from '@/lib/windowWidth';

const Pricing = (): JSX.Element => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div className={styles.container} id="pricing">
      <h1 className={styles.heading}>
        Kolik to stojí
      </h1>
      <Flex
        justifyContent="space-around"
        ref={ref}
        mobileDirection="column"
        className={`${globalStyles.section} ${inView ? globalStyles.show : ''}`}
      >
        <div className={styles.card}>
          <h3 className={styles.center}>Basic</h3>
          <div>
            <ul>
              <li>On-site 1x za 14 dní max 4 hodiny
              </li>
              <li>0-50 spravovaných zařízení</li>
              <li>Vzdálená podpora přes RustDesk, Teams, Teamviewer</li>
              <li>Telefonická, mailová nebo chat podpora ve všední dny 7:00-15:00</li>
              <li>Vícepráce: 500,- Kč/hod</li>
              <h2 className={styles.center} style={{fontFamily: 'Raleway'}}>15 000 Kč/měsíc</h2>
            </ul>
          </div>
        </div>
        <div className={styles.card}>
          <h3 className={styles.center}>Premium</h3>
          <div>
            <ul>
              <li>On-site 1x za 7 dní max 4 hodiny</li>
              <li>50-100 spravovaných zařízení
              </li>
              <li>Vzdálená podpora přes RustDesk, Teams, Teamviewer</li>
              <li>Telefonická, mailová nebo chat podpora ve všední dny 7:00-15:00</li>
              <li>Vícepráce: 400,- Kč/hod</li>
              <h2 className={styles.center} style={{fontFamily: 'Raleway'}}>20 000 Kč/měsíc</h2>
            </ul>
          </div>
        </div>
        <div className={styles.card}>
          <h3 className={styles.center}>Ultimate</h3>
          <div>
            <ul>
              <li>On-site 1x za 7 dní max 8 hodin</li>
              <li>100+ spravovaných zařízení
              </li>
              <li>Vzdálená podpora přes RustDesk, Teams, Teamviewer</li>
              <li>Telefonická, mailová nebo chat podpora 24/7</li>
              <li>Vícepráce: 300,- Kč/hod</li>
              <h2 className={styles.center} style={{fontFamily: 'Raleway'}}>30 000 Kč/měsíc</h2>
            </ul>
          </div>
        </div>
      </Flex>
    </div>
  );
};

export default Pricing;
