'use client';

import { useEffect } from "react";

export const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={"flashing-border"}>
      <h2>Something went wrong inside of User Layout</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
