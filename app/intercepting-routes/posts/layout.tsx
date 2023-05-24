import React from 'react';

const PostsLayout = async ({
  children,
  modal,
}: React.PropsWithChildren & { modal: React.ReactNode }) => {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
};

export default PostsLayout;
