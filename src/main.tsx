import { createRoot } from 'react-dom/client';
import App from '@/App';
import '@styles/global.css';
import { initGoogleAnalytics } from '@libs/analytics';

initGoogleAnalytics();
createRoot(document.getElementById('root')!).render(<App />);
