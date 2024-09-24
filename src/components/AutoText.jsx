import React from "react";
import { ReactTyped } from "react-typed";

const AutoText = () => {
  return (
    <div className="flex justify-center mt-8 md:mt-2">
      <div className="text-3xl md:text-5xl font-bold text-gray-700 dark:text-gray-400">
        <ReactTyped
          strings={[
            "Book for Ticket",
            "Book for Umra",
            "Pre Book for Hajj 2025",
          ]}
          typeSpeed={80}
          backSpeed={60}
          loop
          cursorChar="|"
          cursorClass="typed-cursor"
        />
        {/* Inline styling for cursor */}
        <style>
          {`
            .typed-cursor {
                font-size: 2.5rem; /* Default smaller cursor size */
                color: rgba(26, 86, 219, 0.7); /* Blue color with 70% opacity */
                animation: blink 0.7s infinite; /* Blinking effect */
            }
            
            @media (min-width: 768px) {
                .typed-cursor {
                    font-size: 5rem; /* Larger cursor for medium screens and above */
                }
            }

            @keyframes blink {
                0% { opacity: 1; }
                50% { opacity: 0; }
                100% { opacity: 1; }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default AutoText;
