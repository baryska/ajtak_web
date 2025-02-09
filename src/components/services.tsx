import { urlFor } from '@/lib/sanity';
import { SmartImage, Text } from '@/once-ui/components';
import React, { useEffect, useState } from 'react';
import styles from './Services.module.scss';
import globalStyles from '../app/Home.module.scss';
import { useInView } from 'react-intersection-observer';
import { fetchServices } from '@/api/services';

interface Img {
  asset: {
    url: string
  }
}

interface Service {
  key: number,
  title: string,
  image: Img,
  text: string
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([])
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchServices();
      setServices(data)
    }
    fetchData();
  }, [])


  return (
    <>
      <div
        ref={ref}
        className={styles.container}
        id="services"
      >
        <div>
          <h1 className={styles.heading}>
            O co se už nemusíte starat
          </h1>
        </div>

        <div
          ref={ref}
          className={`${globalStyles.section} ${inView ? globalStyles.show : ''
            } ${styles.cardContainer}`}
        >
          {services.length > 0 ? services.map((service) => (
            <div className={`${styles.card} ${globalStyles.section} ${inView ? globalStyles.show : ''
              }`}>
              <SmartImage
                alt="banner"
                src={urlFor(service.image).url()}
                aspectRatio="4/3"
                className={styles.cardImage}
                objectFit="cover" />
              <p className={styles.cardText}>{service.title}</p>
              <p className={styles.cardTextOnHover}>{service.text}</p>
            </div>
          )): (
          <img src="/images/loading.gif" alt="Loading" height="150px" width="150px" style={{margin: 'O auto'}}/>
          )}
        </div>

        <Text
          as="div"
          marginBottom="16"
          className={styles.smallText}
        >
          ...a o cokoliv dalšího budete potřebovat.
        </Text>
      </div>

    </>
  )
}

export default Services;
