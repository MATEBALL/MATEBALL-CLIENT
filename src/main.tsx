import { createRoot } from 'react-dom/client';
import App from '@/App';
import '@styles/global.css';

// strict mode 임시 주석 처리

createRoot(document.getElementById('root')!).render(<App />);