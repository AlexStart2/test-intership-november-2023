
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';


function Home() {

    const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    const encodedUrl = encodeURIComponent(URL);

    const [text, setText] = useState('');

    const handleChange = event => {
        const result = event.target.value.replace(/[^a-z]/gi, '');

        setText(result);
    };

    function Search() {

        const [response, setResponse] = useState([]);

        async function getResponse() {
            fetch(URL + text, {
                method: "GET",

            }).then((res) => res.json()).then((data) => {
                setResponse(data)
            })
        }
        useEffect(() => {
            getResponse();
        }, []);


        return response;
    }

    return (
        <>
            <Header />
            {console.log(encodedUrl + text)}
            <div className='Formular'>
                <form>
                    <input
                        type='text'
                        maxLength={100}
                        value={text}
                        onChange={handleChange}
                        required />
                    <button onClick={Search}>Search Word</button>
                </form>
            </div>


            <Footer />
        </>
    );
}

export default Home;
