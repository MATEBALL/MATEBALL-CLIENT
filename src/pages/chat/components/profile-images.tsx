import Icon from '@components/icon/icon';

interface ProfileImagesProps {
  type: 'single' | 'group';
}
const ProfileImages = ({ type }: ProfileImagesProps) => {
  if (type === 'group') {
    return (
      <div className="flex-col">
        <div className="flex">
          <Icon name="chat-profile" size={2.4} />
          <Icon name="chat-profile" size={2.4} />
        </div>
        <div className="flex">
          <Icon name="chat-profile" size={2.4} />
          <Icon name="chat-profile" size={2.4} />
        </div>
      </div>
    );
  }

  return <Icon name="chat-profile" size={4.8} />;
};

export default ProfileImages;
