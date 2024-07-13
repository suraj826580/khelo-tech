import React from "react";
import Partner_1 from "../../assets/images/Partner_1.png";
import Partner_2 from "../../assets/images/Partner_2.png";
import Partner_3 from "../../assets/images/Partner_3.png";
import Partner_4 from "../../assets/images/Partner_4.png";
import Partner_5 from "../../assets/images/Partner_5.png";
import Partner_6 from "../../assets/images/Partner_6.png";
import Partner_7 from "../../assets/images/Partner_7.png";
import Partner_8 from "../../assets/images/Partner_8.png";
import Partner_9 from "../../assets/images/Partner_9.png";
import Partner_10 from "../../assets/images/Partner_10.png";
import Partner_11 from "../../assets/images/Partner_11.png";
import Partner_12 from "../../assets/images/Partner_12.png";
import Partner_13 from "../../assets/images/Partner_13.png";
import Partner_14 from "../../assets/images/Partner_14.png";
import Partner_15 from "../../assets/images/Partner_15.png";
import Partner_16 from "../../assets/images/Partner_16.png";
import Partner_17 from "../../assets/images/Partner_17.png";
import ImageGallery from "../ImageGallery/ImageGallery";

const Partners = () => {
  const gamesPartners = [
    { src: Partner_1, alt: "Uttarakhand" },
    { src: Partner_2, alt: "Circular Logo" },
    { src: Partner_3, alt: "Ministry of Youth Affairs and Sports" },
    { src: Partner_4, alt: "India Olympic" },
  ];

  const supportedBy = [
    { src: Partner_5, alt: "ONGC" },
    { src: Partner_6, alt: "IndianOil" },
    { src: Partner_7, alt: "Coal India" },
  ];
  const AssociateSponsors = [
    { src: Partner_8, alt: "Image" },
    { src: Partner_9, alt: "Image" },
    { src: Partner_10, alt: "Image" },
    { src: Partner_11, alt: "Image" },
  ];
  const Partners = [
    { src: Partner_12, alt: "Image" },
    { src: Partner_13, alt: "Image" },
    { src: Partner_14, alt: "Image" },
    { src: Partner_15, alt: "Image" },
  ];
  const BroadcastPartner = [
    { src: Partner_16, alt: "Image" },
    { src: Partner_17, alt: "Image" },
  ];

  return (
    <div className="partners-container">
      <ImageGallery
        heading="GAMES PARTNERS"
        images={gamesPartners}
        columnSizes={{ xs: 6, md: 3 }}
      />
      <ImageGallery
        heading="SUPPORTED BY"
        images={supportedBy}
        columnSizes={{ xs: 6, md: 4 }}
      />
      <ImageGallery
        heading="Associate Sponsors"
        images={AssociateSponsors}
        columnSizes={{ xs: 6, md: 4 }}
      />
      <ImageGallery
        heading="Partners"
        images={Partners}
        columnSizes={{ xs: 6, md: 4 }}
      />
      <ImageGallery
        heading="BroadcastPartner"
        images={BroadcastPartner}
        columnSizes={{ xs: 6, md: 4 }}
      />
    </div>
  );
};

export default Partners;
