import { getHeaderContent } from '@components/header/utils/get-header';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const isFail = urlParams.has('fail');

  return (
    <header className="h-[5.6rem] py-[1.55rem] pl-[2rem]">
      {getHeaderContent(location.pathname, isFail, navigate)}
    </header>
  );
};

export default Header;
