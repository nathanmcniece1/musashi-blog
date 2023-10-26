import { useEffect, useState } from 'react';
import utilStyles from '../styles/utils.module.css';

function Collected() {
    const [nfts, setNfts] = useState([]);

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

                // console.log(data)
                // Filter out the nfts with the name "LMAO.EXE"
                const filteredNfts = data.nfts.filter(nft => nft.name !== "LMAO.EXE");
                setNfts(filteredNfts);
            })
            .catch(err => console.error(err));
    }, []); // The empty array means this effect will only run once when the component mounts

    return (
        <div className={utilStyles.nfts}>
            {nfts.map((nft, index) => (
                <img key={index} src={nft.image_url} alt={nft.name} />
            ))}
        </div>
    );
}

export default Collected;
