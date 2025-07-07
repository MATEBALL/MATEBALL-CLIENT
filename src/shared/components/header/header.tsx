import { getHeaderContent } from '@components/header/utils/get-header';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const isFail = urlParams.get('fail') === 'true';

  return (
    <div className="bg-gray-black">
      <header className="h-[5.6rem] py-[1.55rem] pl-[2rem]">
        {getHeaderContent(location.pathname, isFail)}
      </header>
    </div>
  );
};

export default Header;
