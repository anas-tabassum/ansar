import UmraBackground from "../components/UmraBackground";
import UmraCard from "../components/UmraCard";

const Umra = () => {
  const booking = [
    {
      title: "Oumra 2024",
      start_date: "Dec 20,2024",
      end_date: "Dec 30,2024",
      price: 2700,
    },
    {
      title: "Oumra 2024",
      start_date: "Mar 17,2025",
      end_date: "Mar 30,2025",
      price: 2700,
    },
    {
      title: "Oumra 2024",
      start_date: "Jui 20,2025",
      end_date: "Jui 30,2025",
      price: 2500,
    },
    {
      title: "Oumra 2025",
      start_date: "Sep 20,2025",
      end_date: "Sep 30,2025",
      price: 2500,
    },
    {
      title: "Oumra 2025",
      start_date: "Dec 20,2025",
      end_date: "Dec 30,2025",
      price: 2500,
    },
  ];
  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-bold text-center mt-44">Oumra Packages</h1>
      <UmraBackground />

      {booking.map((item, index) => (
        <UmraCard item={item} key={index} />
      ))}
    </div>
  );
};

export default Umra;
