import Icon from '@components/icon/icon';

const ProfileImages = (type: string) => {
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
  } else {
    return <Icon name="chat-profile" size={4.8} />;
  }
};

export default ProfileImages;
