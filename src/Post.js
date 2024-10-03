import React, { forwardRef } from 'react'; // Import forwardRef only once
import './Post.css';
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { formatDistanceToNow } from 'date-fns';  // Relative time formatting

const Post = forwardRef(({ name, description, message, photoUrl, timestamp }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name?.charAt(0)}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
          {/* Display relative time */}
          <p className="post__timestamp">
            {timestamp?.toDate() 
              ? formatDistanceToNow(timestamp.toDate(), { addSuffix: true }) 
              : "Just now"}
          </p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={RepeatOutlinedIcon} title="Repost" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
