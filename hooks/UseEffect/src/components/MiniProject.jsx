import React, { useEffect, useState } from 'react';

const MiniProject = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const result = await response.json();
            setData(result);
        } catch (err) {
            console.log('Err in fetching data', err);
        }
    };

    const handleClick = () => {
        fetchData();
    };

    return (
        <div>
            <h3>Mini Project with API</h3>
            {data && <img src={data?.message} alt="dog" />}
            <p>{data?.status}</p>
            <button onClick={handleClick}>Next Image</button>
        </div>
    );
};

export default MiniProject;
