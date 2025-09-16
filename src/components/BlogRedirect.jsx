import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogRedirect = () => {
  const { id, title } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Perform 301 redirect to the new URL format
    const newPath = `/blog/${title}`;
    navigate(newPath, { replace: true });
  }, [id, title, navigate]);

  return null; 
};

export default BlogRedirect; 