import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Self-custody',
    Svg: require('@site/static/img/wallet.svg').default,
    description: (
    <ul style={{ fontSize: '0.9rem', lineHeight: '1.4', listStyleType: 'disc', paddingLeft: '1.2rem' }}>
      <li>OROKAI never holds user funds or private keys.</li>
      <li>Every transaction is prepared by the interface and signed directly by the user.</li>
    </ul>
    ),
  },
  {
    title: 'Informational-only',
    Svg: require('@site/static/img/chat.svg').default,
    description: (
    <ul style={{ fontSize: '0.9rem', lineHeight: '1.4', listStyleType: 'disc', paddingLeft: '1.2rem' }}>
      <li>All AI-generated suggestions are purely informational. </li>
      <li>OROKAI does not provide financial or investment advice 
        — users make their own decisions and authorize all actions.</li>
    </ul>
    ),
  },
  {
    title: 'Technical middleware',
    Svg: require('@site/static/img/layer.svg').default,
    description: (
    <ul style={{ fontSize: '0.9rem', lineHeight: '1.4', listStyleType: 'disc', paddingLeft: '1.2rem' }}>
      <li>OROKAI is a software layer connecting users to external 
        DeFi protocols and licensed partners — never a financial intermediary. </li>
    </ul>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
