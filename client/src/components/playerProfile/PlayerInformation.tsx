import React, { ReactElement } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ContentWrapper, Text } from './Player.Styled';

const PlayerInformation: React.FC = (): ReactElement => {
  return (
    <Card
      sx={{
        maxWidth: '280px',
        height: '300px',
        display: 'flex',
        flexDirection: 'flex-start',
        border: '1px solid #d9d9d9', // Change this to your desired border color
        borderRadius: '5px', // Change this to your desired border radius
        marginLeft: '22px',
        boxShadow: 2,
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          borderColor: 'red',
          border: '2px',
          color: 'black',
          fontWeight: 700,
        }}
      >
        <Typography variant="h6" sx={{ textAlign: 'right' }}>
          معلومات شخصية
        </Typography>
        <ContentWrapper>
          <Text color="textSecondary" sx={{ flexGrow: 5, textAlign: 'right' }}>
            واحد ضايع مش عارف وين هوا
          </Text>
          <Typography sx={{ minWidth: '45px', textAlign: 'right' }}>
            الوصف
          </Typography>
        </ContentWrapper>
        <ContentWrapper>
          <Text sx={{ flexGrow: 5, textAlign: 'right' }} color="textSecondary">
            056978226
          </Text>
          <Typography sx={{ minWidth: '45px', textAlign: 'right' }}>
            الهاتف
          </Typography>
        </ContentWrapper>
        <ContentWrapper>
          <Text color="textSecondary" sx={{ flexGrow: 5, textAlign: 'right' }}>
            قطاع غزة{' '}
          </Text>
          <Typography sx={{ minWidth: '45px', textAlign: 'right' }}>
            العنوان
          </Typography>
        </ContentWrapper>
        <ContentWrapper>
          <Text color="textSecondary" sx={{ flexGrow: 5, textAlign: 'right' }}>
            مهاجم{' '}
          </Text>
          <Typography sx={{ minWidth: '45px', textAlign: 'right' }}>
            المركز
          </Typography>
        </ContentWrapper>
        <ContentWrapper>
          <Text color="textSecondary" sx={{ flexGrow: 5, textAlign: 'right' }}>
            24{' '}
          </Text>
          <Typography sx={{ minWidth: '45px', textAlign: 'right' }}>
            العمر
          </Typography>
        </ContentWrapper>
      </CardContent>
    </Card>
  );
};
export default PlayerInformation;
