import React, { useState } from "react";
import "./book-club.css";
import { IconContext } from "react-icons";
import { MdDownload } from "react-icons/md";

import { Document, Page } from 'react-pdf';

export default class BookClub extends React.Component {
    render() {
        return (
            <div>
                <div className="bc-cover-image">
                    <div className="welcome-message">
                        <div className="hori-bar"></div>
                        <h1>Book Club</h1>
                        <div className="hori-bar"></div>
                    </div>
                </div>
                <div className="book-preview">
                    <div>
                        <div className="book-cover">
                            <h2>{"<Book Cover>"}</h2>
                        </div>
                        <button>
                            Download
                            <IconContext.Provider value={{ color: 'white', size: '20px' }}><MdDownload /></IconContext.Provider>
                        </button>
                    </div>
                    <div className="book-info">
                        <h1>{"<Book Tile>"}</h1>
                        <p>{"<Description>"}</p>
                        <p>{"<Meeting Date>"}</p>
                        {/* <Document file='file.pdf' onLoadSuccess={this.componentDidMount.bind(this)}>
                            <Page pageNumber={1} />
                        </Document> */}
                    </div>
                </div>
            </div>
        );
    }
}