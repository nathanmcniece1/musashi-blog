import { useEffect, useState } from 'react';
import utilStyles from '../styles/utils.module.css';

function Collected() {
    const [nfts, setNfts] = useState([]);
    const [loading, setLoading] = useState(true); // Introduce a loading state
    const numPlaceholders = 10; // Number of placeholder tiles

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'x-api-key': '93d7b495263d4cb8bdbd41778e785b40'
            }
        };

        fetch('https://api.opensea.io/api/v2/chain/zora/account/0xb3C7AcA9728aB0355A1AFFfec5513D39a5986892/nfts', options)
            .then(response => response.json())
            .then(data => {
                const filteredNfts = data.nfts.filter(nft => nft.name !== "LMAO.EXE");
                setNfts(filteredNfts);
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className={utilStyles.nfts}>
            {loading ? (
                // Display multiple placeholders while loading
                Array.from({ length: numPlaceholders }).map((_, index) => (
                    <div key={index} className={utilStyles.placeholder}></div>
                ))
            ) : (
                nfts.map((nft, index) => (
                    <img key={index} src={nft.image_url} alt={nft.name} />
                ))
            )}
        </div>
    );
}

export default Collected;
