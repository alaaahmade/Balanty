import app from './app';

app.listen(app.get('PORT'), (): void => {
  console.log(`server is running on http://localhost:${app.get('PORT')}`);
  
});
