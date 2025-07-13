import { createRoot } from 'react-dom/client';
import App from '@/App';
import '@styles/global.css';

<<<<<<< HEAD
// strict mode 임시 주석 처리

createRoot(document.getElementById('root')!).render(<App />);
=======
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
>>>>>>> 72c3e5e (feat: 내 정보 페이지 퍼블리싱 (#126))
