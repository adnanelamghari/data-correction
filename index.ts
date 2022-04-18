import * as dotenv from 'dotenv';
import * as App from './src/core/app.init';

dotenv.config();
App.initApp().then(() => {
    console.log('Script finished.');
});
