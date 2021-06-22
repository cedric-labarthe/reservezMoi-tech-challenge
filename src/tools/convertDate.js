// Converting function
const convert = (seconds) => {
  if (seconds < 60) {
    return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
  }
  if (seconds >= 60 && seconds < 3600) {
    const minute = Math.floor(seconds / 60);
    return `${minute} minute${minute > 1 ? 's' : ''} ago`;
  }
  if (seconds >= 3600 && seconds < 86400) {
    const hour = Math.floor(seconds / 3600);
    return `${hour} hour${hour > 1 ? 's' : ''} ago`;
  }
  if (Math.floor(seconds / 86400) >= 0 && Math.floor(seconds / 86400) <= 1) {
    return 'Yesterday';
  }
  return `${Math.floor(seconds / 86400)} days ago`;
};

const calculateTime = (createDate) => {
  // Create two instances, actual date and issue date
  const date = new Date();
  const createdAt = new Date(createDate);

  // Calculate the difference in minutes
  const secondsDifference = Math.floor(
    (date.getTime() - createdAt.getTime()) / 1000,
  );

  // Format the result
  return convert(secondsDifference);
};

export default calculateTime;
