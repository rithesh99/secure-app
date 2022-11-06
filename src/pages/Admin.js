import React, { useEffect } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import { db } from "../firebase";

function Admin() {
  const [pics, setPics] = React.useState([]);
  const [videos, setVideos] = React.useState([]);
  useEffect(() => {
    db.collection("pics")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          setPics((arr) => [...arr, data.imageUrl]);
          console.log(data);
        });
      });

    db.collection("videos")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          setVideos((arr) => [...arr, data.videoUrl]);
          console.log(data);
        });
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="row">
        {pics.map((url, i) => {
          return <Card url={url} />;
        })}
      </div>
      <div className="row">
        {videos.map((url, i) => {
          return <Card url={url} type="video" />;
        })}
      </div>
    </div>
  );
}

export default Admin;
