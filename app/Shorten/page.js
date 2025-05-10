"use client"
import Link from 'next/link';
// This is the page that will be used to shorten the URL    
import React from 'react'
import { useState } from 'react';

const Shorten = () => {
    const [url, setUrl] =  useState("");
    const [ shortenUrl, setshortenUrl] =  useState("");
    const [Generate, setGenerate] =  useState("");

    const handleChange1 = (e) => {
        setUrl(e.target.value);
    }
    const handleChange2 = (f) => { 
        setshortenUrl(f.target.value);
    }
    const generate =() => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
        "url": url,
        "shortUrl": shortenUrl
        });

        const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("/api/generate", requestOptions)
        .then(response => response.json())
        .then(result =>{ 
            setGenerate(`${process.env.NEXT_PUBLIC_HOST}${shortenUrl}`);
            setUrl("");
            setshortenUrl("");
            console.log(result)
            alert(result.message)
        })
        .catch(error => console.log('error', error));
    }

    return (
        <div className='mx-auto max-w-lg p-8 my-12 bg-blue-300'>
            <h1 className='font-bold text-3xl text-center'>Generate your URLs</h1>
            <div className="p-6 flex flex-col">
                <input type="text" value={url} placeholder="Enter your URL" className="input p-2 rounded-sm my-1 bg-blue-200 focus:outline-blue-600" onChange={handleChange1} />
                <input type="text" value={shortenUrl} placeholder="Enter your  shorten URL" className=" rounded-sm input p-2 bg-blue-200 focus:outline-blue-600" onChange={handleChange2} />
                <button className="btn cursor cursor-pointer text-xl bg-blue-600 rounded-sm p-2 my-3" onClick={generate}>Generate</button>
               
            </div>

            {Generate && <>
            <span className='font-bold text-xl'>Your link </span>
                <code> <Link target='_blank' href= {Generate}>{Generate}</Link>
                </code> </>}               
                
        </div>

    )

}

export default Shorten
