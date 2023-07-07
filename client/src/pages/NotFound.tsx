import { Box, Link, Typography } from '@mui/material';
import {
  Page404Container,
  FourZeroFourBg,
  Title,
  ContentBox404,
} from '../components/errros/Errors.Styled';

const NotFoundPage = () => {
  return (
    <Page404Container>
      <Box className="container">
        <Box className="row">
          <Box className="col-sm-12">
            <Box className="col-sm-10 col-sm-offset-1 text-center">
              <FourZeroFourBg>
                <Title variant="h1" align="center">
                  404
                </Title>
              </FourZeroFourBg>

              <ContentBox404>
                <Typography variant="h3" component="h2" align="center">
                  تبدو وكأنك قد ضللت الطريق
                </Typography>

                <Typography variant="body1" align="center">
                  الصفحة التي تبحث عنها غير متاحة!
                </Typography>

                <Box textAlign="center">
                  {' '}
                  <Link
                    href="/"
                    className="link_404"
                    underline="none"
                    sx={{
                      color: '#fff',
                      padding: '10px 20px',
                      background: '#39ac31',
                      margin: '20px 0',
                      display: 'inline-block',
                    }}
                  >
                    العودة إلى الصفحة الرئيسية
                  </Link>
                </Box>
              </ContentBox404>
            </Box>
          </Box>
        </Box>
      </Box>
    </Page404Container>
  );
};

export default NotFoundPage;
