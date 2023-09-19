/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "Mont": ["Mont", "sans-serif"]
            },
            boxShadow: {
                'custom': '2px 4px 4px 0px rgba(187, 187, 187, 0.25) inset'
            },
        },
        screens: {
            '3xl': {'max': '2500px'},
            // => @media (max-width: 2500px) { ... }

            '2xl': {'max': '1535px'},
            // => @media (max-width: 1535px) { ... }

            'xl': {'max': '1279px'},
            // => @media (max-width: 1279px) { ... }

            'lg': {'max': '1023px'},
            // => @media (max-width: 1023px) { ... }

            'md': {'max': '767px'},
            // => @media (max-width: 767px) { ... }

            'sm': {'max': '639px'},
            // => @media (max-width: 639px) { ... }

            'xsm': {'max': '450px'},
            // => @media (max-width: 639px) { ... }

            'xxsm': {'max': '450px'},
            // => @media (max-width: 639px) { ... }
        }
    },
    plugins: [],
}