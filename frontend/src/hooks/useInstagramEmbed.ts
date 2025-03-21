import { useEffect } from "react";

const useInstagramEmbed = () => {
    useEffect(() => {
        // Check if the script is already added to avoid duplicates
        if (!document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
            const script = document.createElement("script");
            script.async = true;
            script.src = "https://www.instagram.com/embed.js";
            document.head.appendChild(script);

            return () => {
                document.head.removeChild(script);
            };
        }
    }, []);
};

export default useInstagramEmbed;
