import React, { useState, useEffect } from "react";
import Image from "next/image";
import '../app/styles/card.css';

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check window width on client side
    setIsMobile(window.innerWidth < 640);
  }, []);

  return (
    <div className={`card ${isMobile ? '' : 'card-sm'}`} data-aos="zoom-in-up">
      <div>
        <Image
          className={`card-image ${isMobile ? '' : 'card-image-sm'}`}
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>

      <div className="card-content">
        <div className="card-title">{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((el) => (
            <div className="card-tags" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
