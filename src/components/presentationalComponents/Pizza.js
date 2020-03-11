import React, { Fragment } from 'react';
import { Card, Image } from 'semantic-ui-react';
import moment from 'moment';

const Pizza = (props) => {
  const { pizza } = props;
  const ingredients = pizza.ingredients.map(ingredient => ingredient.name).join(' & ');

  return (
    <Fragment>
      <Card className='column'>
        <Image
          src={pizza.imageURL}
          className='image'
        />
        <Card.Content>
          <Card.Header>{pizza.name}</Card.Header>
          <Card.Meta>
            <span>{pizza.creator}</span>
          </Card.Meta>
          <Card.Description>{`You better get ${pizza.creator.split(' ')[0]}'s pizza right!.`}</Card.Description>
        </Card.Content>
        <Card.Content extra>{`Ingredients are: ${ingredients}`}</Card.Content>
        <Card.Content>
          {moment(pizza.createdTime).format('LLL')}
        </Card.Content>
      </Card>
    </Fragment>
  );
};

export default Pizza;
