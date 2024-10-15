import './EmbedMaps.css';

const EmbedMaps = () => {
    return (
        <div className="mapouter">
            <div className="gmap_canvas">
                <iframe
                    title='maps'
                    width="100%"
                    height="500"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Graha mas Pemuda 8-9 Jl Pemuda Rawamangun Jakarta Timur, RT.20/RW.6, Jati, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220&t=k&z=20&ie=UTF8&iwloc=&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                ></iframe>
                <a href="https://2yu.co">2yu</a>
            </div>
        </div>
    );
};

export default EmbedMaps;