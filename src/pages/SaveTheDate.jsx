import arch from '../images/rose_may_flower_arch.jpg';
import squareArch from '../images/rose_may_flower_arch_square.jpg';
import { lavendarFloral } from '../styles/colors';
import ImageCard from '../components/ImageCard';
import PageBase from './PageBase';

export default function SaveTheDate() {
  return (
    <PageBase>
      <ImageCard 
        desktopImage={arch} 
        mobileImage={squareArch} 
        textColor={lavendarFloral}
      >
        Save the date! September 27th 2025, Perth, Ontario.
      </ImageCard>
    </PageBase>
  );
}
