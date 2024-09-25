function Notification() {
  const socialMediaNotifications = [
    "John Doe liked your comment.",
    "Jane Doe mentioned you in a post.",
    "You have a new message from Sarah Smith.",
    "A group you follow has a new post.",
    "There's a new event happening near you.",
    "Someone reacted to your story.",
    "You received a birthday wish from Michael Brown.",
    "Your friend Anna Lee is now following you.",
    "There's a trending topic you might be interested in.",
    "A video you watched recently has a new comment.",
    "Someone requested to follow you.",
    "You have a new follower request from Emily Jones.",
    "Get early access to a new feature! Check it out.",
    "Don't miss out! Your favorite store has a sale today.",
    "We noticed you haven't logged in recently. Welcome back!",
    "Complete your profile to unlock new features.",
    "Someone you may know joined the platform. Follow them now!",
    "Congratulations! You won a prize in our latest giveaway.",
    "There's an update available for the app. Install now for better performance.",
    "Your friend David sent you a friend request. Accept it to chat!",
    "Happy Friday! Have a great weekend!",
  ];

  return (
    <>
      <div className="notify">
        {socialMediaNotifications.map((item) => (
          <button className="nottybuton">{item}</button>
        ))}
      </div>
    </>
  );
}
export default Notification;
