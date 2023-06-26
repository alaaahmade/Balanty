import React, { ReactElement } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ContentWrapper } from './Player.Styled';
import EditInput from '../stadiumProfile/EditInput';

const PlayerInformation: React.FC = (): ReactElement => {
  return (
    <Card
      sx={{
        maxWidth: '280px',
        height: '320px',
        display: 'flex',
        flexDirection: 'flex-start',
        border: '1px solid #d9d9d9',
        borderRadius: '5px',
        marginLeft: '42px',
        marginTop: '70px',
        boxShadow: 2,
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
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
          <EditInput lastValue="مجروح بنزف طموح" multiline={false} />
          <Typography>الوصف</Typography>
        </ContentWrapper>
        <ContentWrapper>
          <EditInput lastValue="025896311" multiline={false} />
          <Typography sx={{ minWidth: '45px', textAlign: 'right' }}>
            الهاتف
          </Typography>
        </ContentWrapper>
        <ContentWrapper>
          <EditInput lastValue="قطاع غزة" multiline={false} />
          <Typography sx={{ minWidth: '45px', textAlign: 'right' }}>
            العنوان
          </Typography>
        </ContentWrapper>
        <ContentWrapper>
          <EditInput lastValue="مهاجم" multiline={false} />
          <Typography sx={{ minWidth: '45px', textAlign: 'right' }}>
            المركز
          </Typography>
        </ContentWrapper>
        <ContentWrapper>
          <EditInput lastValue="24" multiline={false} />
          <Typography sx={{ minWidth: '45px', textAlign: 'right' }}>
            العمر
          </Typography>
        </ContentWrapper>
      </CardContent>
    </Card>
  );
};

export default PlayerInformation;
