import HajjCard from "../components/HajjCard";
import Banner from "../media/Hajj_cards_banner.jpeg";

const HajjPackages = () => {
  let data = [
    {
      id: 1,
      page: "hajj_package_1",
      image: "card1.png",
      text: "Le programme 1 commence à Médine, où vous serez logé dans un hôtel à moins d'1 km de la mosquée du Prophète Muhammad ﷺ. Ensuite, vous serez transféré dans un hôtel à moins d'1 km de la Kaaba à La Mecque. Vous y serez hébergé et conserverez votre chambre à La Mecque pendant les Manasik. Après les Manasik, vous resterez à La Mecque jusqu'à votre transfert à l'aéroport de Djeddah pour votre vol de départ.",
    },
    {
      id: 2,
      page: "hajj_package_2",
      image: "card2.png",
      text: "Le programme 2 commence à Médine, où vous serez logé dans un hôtel à moins de 2 km de la mosquée du Prophète Muhammad ﷺ. Ensuite, vous serez transféré dans un hôtel à moins de 2 km de la Kaaba à La Mecque. Vous y serez hébergé et conserverez votre chambre à La Mecque pendant les Manasik. Après les Manasik, vous resterez à La Mecque jusqu'à votre transfert à l'aéroport de Djeddah pour votre vol de départ.",
    },
    {
      id: 3,
      page: "hajj_package_3",
      image: "card3.png",
      text: "Le programme 3 commence à Médine, où vous serez logé dans un hôtel à moins de 3 km de la mosquée du Prophète Muhammad ﷺ. Ensuite, vous serez transféré dans un hôtel à moins de 3 km de la Kaaba à La Mecque. Vous y serez hébergé et conserverez votre chambre à La Mecque pendant les Manasik. Après les Manasik, vous resterez à La Mecque jusqu'à votre transfert à l'aéroport de Djeddah pour votre vol de départ.",
    },
  ];
  return (
    <div className="">
      {/* <h1 className="text-center text-4xl mb-12">Forfaits Hajj</h1> */}
      <img src={Banner} alt="Hajj Banner" className="mb-12 h-[90%]" />
      <div className="flex flex-col items-center justify-evenly md:flex-row">
        {data && data.map((item) => <HajjCard item={item} />)}
      </div>
    </div>
  );
};

export default HajjPackages;
