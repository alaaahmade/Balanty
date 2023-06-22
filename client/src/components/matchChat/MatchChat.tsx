import Message from './Message';

const MatchChat = () => {
  return (
    <div style={{ width: '500px', border: '1px solid #ccc' }}>
      <Message
        message="Hi G13"
        time={Date.now().toString()}
        sender="ahmed"
        senderAvatar="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
        isReceived
      />
      <Message
        message="Hi G13"
        time={Date.now().toString()}
        sender="ahmed"
        senderAvatar="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
        isReceived={false}
      />
      <Message
        message="Hi G13"
        time={Date.now().toString()}
        sender="ahmed"
        senderAvatar="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
        isReceived
      />
      <Message
        message="Hi G13"
        time={Date.now().toString()}
        sender="ahmed"
        senderAvatar="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
        isReceived={false}
      />
    </div>
  );
};

export default MatchChat;
