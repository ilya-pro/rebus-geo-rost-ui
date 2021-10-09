import { useEffect, useState } from 'react';

// https://stackoverflow.com/a/65189254

const useScript = ({url, name}: {url: string, name: string}) => {
    const [lib, setLib] = useState({});

    useEffect(() => {
        console.log('S useScript useEffect',url, name);
        const script = document.createElement('script');

        script.src = url;
        script.async = true;
        script.onload = () => setLib({ [name]: window[name as any] } )

        document.body.appendChild(script);

        return () => {
            console.log('S R remove script');
            document.body.removeChild(script);
        }
    }, [url, name]);

    return lib;
};

export default useScript;
