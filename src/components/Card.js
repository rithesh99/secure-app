import React from 'react'
import fileDownload from 'js-file-download';

function Card({ url }) {
    return (
        <div style={styles.card}>
            <img style={styles.img} src={url} alt="Avatar" />
            <div style={styles.container}>
                <a onClick={() => fileDownload(url, '111.jpeg')}>Download</a>
            </div>
        </div>
    )
}

export default Card

const styles = {
    card: {
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        borderRadius: "5px",
    },
    container: {
        padding: "2px 16px"
    },
    img: {
        borderRadius: "5px 5px 0 0",
        width: "100%"
    }
}