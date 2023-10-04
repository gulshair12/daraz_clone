import React from "react";
import Carousal from "../../components/Carousal/Carousal";
import Header from "../../components/Header";

const Images = [
  "https://gcp-img.slatic.net/lazada/5822f812-ef66-4c3b-8c09-30ef530c98e8_PK-1188-344.jpg",
  "https://gcp-img.slatic.net/lazada/bf9e7c38-6a17-4c5f-a4b1-30ee39624d33_PK-1188-344.jpg",
  "https://gcp-img.slatic.net/lazada/517e3020-6dc8-4723-ace4-62002819035a_PK-1188-344.jpg",
  "https://gcp-img.slatic.net/lazada/253d389d-cd48-4c15-88c2-80be217fd8fc_PK-1188-344.jpg",
  "https://gcp-img.slatic.net/lazada/82539b45-de5b-46bb-b44e-60361ba60f94_PK-1188-344.jpg",
];

const Slide = [
  "https://gcp-img.slatic.net/lazada/18a0368f-9cd1-4ff8-8bc8-dfdf8a70c401_PK-1188-344.jpg",
  "https://gcp-img.slatic.net/lazada/3191fd15-fec3-4e3c-94fe-1d1965211447_PK-1188-344.jpg",
  "https://gcp-img.slatic.net/lazada/09ffa9b2-3fed-4ec0-bda4-b8d5467e8c58_PK-1188-344.jpg",
];

const Pakages = [
  "https://gcp-img.slatic.net/lazada/80e926ad-354f-4749-8239-07cf645e9971_PK-388-873.jpg",
  "https://gcp-img.slatic.net/lazada/164e07ef-92b9-4d1c-b82d-5bc8f1795cea_PK-388-873.jpg",
  "https://gcp-img.slatic.net/lazada/0c259b2e-ab76-4ec6-bf49-9466f3905dc7_PK-388-873.jpg",
];

export const Seller = () => {
  return (
    <div>
      <Header />
      <main className="carousal mx-24">
        <div className="w-full ">
          <Carousal autoSlide={true} autoSlideInterval={2000}>
            {Images.map((s) => (
              <img src={s} alt="..." />
            ))}
          </Carousal>
        </div>

        <div className="mt-5 flex justify-center items-center max-w-full">
          <img
            src="https://gcp-img.slatic.net/lazada/650b7e4d-9d00-49a7-8a5d-4c27d94b6db4_PK-1188-393.jpg"
            className=""
            alt="..."
          />
        </div>

        <div className="mt-5 flex justify-center items-center" id="bg_Image">
          <div className="absolute right-28">
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/-jceis9MlXY"
              title="Daraz pe online dukaan kholnay ka asaan tareeka."
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="mt-5 flex md-flex-col">
          {Pakages.map((a) => (
            <div>
              <img src={a} alt="...." />
            </div>
          ))}
        </div>

        <div className="min-w-lg mt-5">
          <Carousal autoSlide={true} autoSlideInterval={2000}>
            {Slide.map((s) => (
              <img src={s} alt="..." />
            ))}
          </Carousal>
        </div>

        <div className="mt-5">
          <img
            src="https://laz-img-cdn.alicdn.com/imgextra/i4/O1CN01ljmPJz1eRaoDaCjy3_!!6000000003868-2-tps-1188-980.png"
            alt="..."
          />
        </div>
      </main>
    </div>
  );
};
