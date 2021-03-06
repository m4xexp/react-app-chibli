import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ChibliPost from "./components/ChibliPost";
import ChibliCard from "./components/ChibliCard";

function Gallery(props) {
  const { chiblis } = props;
  const [selectedChibli, setSelectedChibli] = useState(null);
  const [searchText, setSearchText] = useState("");
  const filteredText = chiblis.filter((chibli) => {
    return (
      chibli.date.includes(searchText) || chibli.title.includes(searchText)
    );
  });

  const chibliElements = filteredText.map((chibli, index) => {
    return (
      <ChibliCard key={index} chibli={chibli} onChibliClick={onClickChibli} />
    );
  });

  let chibliPost = null;
  if (!!selectedChibli) {
    chibliPost = (
      <ChibliPost chibli={selectedChibli} onChibliClose={onCloseChibli} />
    );
  }

  function onClickChibli(selChibli) {
    setSelectedChibli(selChibli);
  }

  function onCloseChibli() {
    setSelectedChibli(null);
  }

  return (
    <section className="blog py-14 bg-white font-kanit" id="gallery">
      <div className="container max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl m-10">
          <span className="block">Our Gallery</span>
          <span className="block xl:inline" id="">
            Enjoy the best moment!
          </span>
        </h1>
        <SearchBar value={searchText} onValueChange={setSearchText} />
        <ul className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 py-10 xl:px-0 xl:grid-cols-4 px-12">
          {chibliElements}
        </ul>
        {chibliPost}
      </div>
    </section>
  );
}

export default Gallery;
