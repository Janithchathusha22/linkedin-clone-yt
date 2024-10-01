function getRelativeTime(timestamp) {
    const now = new Date();
    const postTime = new Date(timestamp?.seconds * 1000);  // Convert Firestore timestamp to JavaScript Date
    const diffInMs = now - postTime;
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  
    if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
    }
  }
  