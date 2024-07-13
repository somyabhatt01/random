await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "lh3.googleusercontent.com"
            }, {
                protocol: 'https',
                hostname: "utfs.io"
            }
        ],
    }
};

export default config;
