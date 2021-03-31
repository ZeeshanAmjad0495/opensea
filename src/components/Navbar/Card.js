import { Card as AntCard } from 'antd';

const Card = ({ imageUrl, name, id }) => {
  return (
    <AntCard style={{ width: 220, height: 300, margin: 5 }} key={id}>
      <p>
        <img
          style={{ width: '180px', height: '200px' }}
          src={imageUrl.toString()}
          alt="banner"
        />
      </p>
      <p>{name}</p>
    </AntCard>
  );
};

export default Card;
