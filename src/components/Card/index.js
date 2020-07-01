import { format } from 'date-fns';
import React from 'react';
import {
  BottomText,
  BottomView,
  Container,
  DateBigText,
  DateContainer,
  Icon,
  RightView,
  Title,
  AnimatableContainer,
} from './styles';

export default React.memo(({ data = {}, size = 1, onPress }) => {
  const date = new Date(data.date || null);
  const handleLocation = (location = '') => (location.length > 20
    ? `${location.substr(0, 20)}...`
    : location);

  return (
    <AnimatableContainer>
      <Container onPress={onPress}>
        <DateContainer>
          <DateBigText contentSize={size}>{format(date, 'dd')}</DateBigText>
          <DateBigText contentSize={size}>{format(date, 'MM')}</DateBigText>
        </DateContainer>
        <RightView>
          <Title contentSize={size}>{data.title}</Title>
          <BottomView>
            <BottomView>
              <Icon name="clock-outline" contentSize={size} />
              <BottomText contentSize={size}>
                {format(date, 'HH:mm')}
              </BottomText>
            </BottomView>
            {!!data.location && (
              <BottomView>
                <BottomText contentSize={size}>
                  {handleLocation(data.location)}
                </BottomText>
                <Icon name="map-marker" contentSize={size} />
              </BottomView>
            )}
          </BottomView>
        </RightView>
      </Container>
    </AnimatableContainer>
  );
});
