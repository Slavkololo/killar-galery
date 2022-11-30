import React, { useState } from 'react';
import myk5Head from '../images/Myk5Head.jpg';
import mykDruid from '../images/MykDruid.jpg';
import slavBassWinter from '../images/Slav Bass winter.jpg';
import atlasCrowd from '../images/photo_2019-05-18_23-36-51.jpg';
import lampaCrowd from '../images/photo_2019-06-01_14-42-22.jpg';
import classes from './Photos.module.css';
import Select from './UI/Select/Select';

const photos = [
    {name: 'Mykyta', src: myk5Head}, 
    {name: 'Mykyta', src: mykDruid},
    {name: 'Sviatoslav', src: slavBassWinter},
    {name: 'crowd', src: atlasCrowd},
    {name: 'crowd', src: lampaCrowd},
];

const Photos = () => {

    const [sortedPhotos, setsortedPhotos] = useState(photos);

    const sortOptions = new Set(photos.map((obj) => obj.name));

    const [selected, setSelected] = useState('');
    
    const selectHandler = (sort, event) => {
        setsortedPhotos(photos.filter(photos => photos.name === sort));
        setSelected(event.target.value);
    };

    return (
        <main className={classes.mainWrapper}>
            <div className={classes.photos}>
                <div >
                    <Select 
                        sortOptions={sortOptions} 
                        value={selected}
                        onChange={selectHandler}
                        // defaultVlue={}
                    />
                </div>
                {sortedPhotos.map(photo => <img className={classes.photo} src={photo.src} alt={photo.name} key={photo.src}/>)}  
            </div>
        </main>

    );
};

export default Photos;
