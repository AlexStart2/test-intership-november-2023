
import React, { useState,useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';


function Home() {

    const [items, setItems] = useState([]);
    console.log("items: ",items);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('userData'));
        if (items) {
           setItems(items);
        }
    }, []);

    const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    const encodedUrl = encodeURIComponent(URL);

    const [text, setText] = useState('');
    const [response, setResponse] = useState([]);

    const handleChange = event => {
        const result = event.target.value.replace(/[^a-z]/gi, '');

        setText(result);
    };

    function Search() {
        async function getResponse() {
            await fetch(encodedUrl + text, {
                method: "GET",
            }).then((res) => res.json()).then((data) => {
                setResponse(data);
            });
        }
        getResponse();
        console.log("Response: ", response);

        const time = new Date();

        const userData = {
            word: text,
            Datetime: time,
        };

        localStorage.setItem("userData", JSON.stringify(userData));

    }

    return (
        <>
            {console.log(localStorage)}
            <Header />
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

            <div className='Table'>
                <table>
                    <thead>
                        <tr>
                            <th>Word</th>
                            <th>Datetime</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* {items.length===0?<>nothing</>:items.map(data => (
                            <tr >
                                <td>{data.word}</td>
                                <td>{data.Datetime}</td>
                                <td>
                                    <button>View</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))} */}
                    </tbody>

                </table>
            </div>



            <Footer />
        </>
    );
}

export default Home;
