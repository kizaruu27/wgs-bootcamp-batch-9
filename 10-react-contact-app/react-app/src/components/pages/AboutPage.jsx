import Image from "../elements/Image";
import NameSection from "../elements/NameSection";
import JobSection from "../elements/JobSection";
import photo from '../../assets/ambatukam.jpg';
import About from "../fragments/About";

export default function AboutPage() {
    return (
        <About>
            <Image src={photo} alt='' />
            <NameSection name='Agus Munawar' />
            <JobSection job='Fulltime Gamer | Beloved Father' />
        </About>
    )
}