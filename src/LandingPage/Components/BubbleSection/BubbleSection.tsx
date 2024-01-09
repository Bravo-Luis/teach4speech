import './BubbleSection.css'
import { Typography } from '@mui/material'

type BubbleSectionProps = {
    title: string;
    text1: string;
    text2: string;
    text3: string;
    img1: string;
    img2: string;
    img3: string;
}

function BubbleSection({ title, text1, text2, text3, img1, img2, img3 }: BubbleSectionProps) {
    return (
      <div className="bubble-section">
        <Typography variant="h3">{title}</Typography>
        <div className="bubble-section-content">
          <div className="bubble-section-box">
            <img src={img1} alt="Bubble 1" />
            <Typography variant="h6" className="bubble-text">{text1}</Typography>
          </div>
          <div className="bubble-section-box">
            <img src={img2} alt="Bubble 2" />
            <Typography variant="h6" className="bubble-text">{text2}</Typography>
          </div>
          <div className="bubble-section-box">
            <img src={img3} alt="Bubble 3" />
            <Typography variant="h6" className="bubble-text">{text3}</Typography>
          </div>
        </div>
      </div>
    );
  }
  

export default BubbleSection;
