// export default () => {
//   const radius = '10px';
//   const size = '25px';
//   const rightBgColor = '#2CB674';
//   return {
//     avatar: {
//       width: size,
//       height: size,
//     },
//     leftRow: {
//       textAlign: 'left',
//     },
//     rightRow: {
//       textAlign: 'right',
//     },
//     msg: {
//       padding: '5px 10px',
//       borderRadius: 4,
//       marginBottom: 4,
//       display: 'inline-block',
//       wordBreak: 'break-word',
//       fontFamily:
//         // eslint-disable-next-line max-len
//         '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
//       fontSize: '14px',
//     },
//     left: {
//       borderTopRightRadius: radius,
//       borderBottomRightRadius: radius,
//       backgroundColor: '#ccc',
//     },
//     right: {
//       borderTopLeftRadius: radius,
//       borderBottomLeftRadius: radius,
//       backgroundColor: rightBgColor,
//       color: '#fff',
//     },
//     leftFirst: {
//       borderTopLeftRadius: radius,
//     },
//     leftLast: {
//       borderBottomLeftRadius: radius,
//     },
//     rightFirst: {
//       borderTopRightRadius: radius,
//     },
//     rightLast: {
//       borderBottomRightRadius: radius,
//     },
//   };
// };

import styled from '@emotion/styled';
import TextareaAutosize from '@mui/base/TextareaAutosize';

import { Box } from '@mui/system';

const Wrapper = styled(Box)({
  width: '50%',
  maxWidth: '700px',
  position: 'absolute',
  bottom: '0',
  left: '50%',
  transform: 'translateX(-50%)',
  border: '1px solid #eee',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  flexGrow: '2',
  padding: '0 1rem 0',
  margin: '1rem 0',
});
export default Wrapper;
