import img1 from '../../description/1.png';
import img2 from '../../description/2.png';
import img3 from '../../description/3.png';
import img4 from '../../description/4.png';
import img5 from '../../description/5.png';
import img6 from '../../description/6.png';
import img7 from '../../description/7.png';
import img8 from '../../description/8.png';
import img9 from '../../description/9.png';

const DescriptionTab = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <>
      {images.map((img, index) => (
        <div key={index} className="flex items-center justify-center">
          <span>{index + 1}</span>
          <img src={img} alt="" />
        </div>
      ))}
    </>
  );
};

export default DescriptionTab;
