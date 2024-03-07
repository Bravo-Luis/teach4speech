import { Container } from "@mui/material";
import {  useEffect, useState } from "react";

import hot_16_10 from '../assets/16_10/hot.svg';
import hot_16_9 from '../assets/16_9/hot.svg';
import hot_4_3 from '../assets/4_3/hot.svg';
import hot_19_5_9 from '../assets/19.5_9/hot.svg';

import cold_16_10 from '../assets/16_10/cold.svg';
import cold_16_9 from '../assets/16_9/cold.svg';
import cold_4_3 from '../assets/4_3/cold.svg';
import cold_19_5_9 from '../assets/19.5_9/cold.svg';

import beach_16_10 from '../assets/16_10/beach.svg';
import beach_16_9 from '../assets/16_9/beach.svg';
import beach_4_3 from '../assets/4_3/beach.svg';
import beach_19_5_9 from '../assets/19.5_9/beach.svg';

import breakfast_foods_16_10 from '../assets/16_10/breakfast_foods.svg';
import breakfast_foods_16_9 from '../assets/16_9/breakfast_foods.svg';
import breakfast_foods_4_3 from '../assets/4_3/breakfast_foods.svg';
import breakfast_foods_19_5_9 from '../assets/19.5_9/breakfast_foods.svg';

import desserts_16_10 from '../assets/16_10/desserts.svg';
import desserts_16_9 from '../assets/16_9/desserts.svg';
import desserts_4_3 from '../assets/4_3/desserts.svg';
import desserts_19_5_9 from '../assets/19.5_9/desserts.svg';

import fruits_16_10 from '../assets/16_10/fruits.svg';
import fruits_16_9 from '../assets/16_9/fruits.svg';
import fruits_4_3 from '../assets/4_3/fruits.svg';
import fruits_19_5_9 from '../assets/19.5_9/fruits.svg';

import ice_cream_flavors_16_10 from '../assets/16_10/ice_cream_flavors.svg';
import ice_cream_flavors_16_9 from '../assets/16_9/ice_cream_flavors.svg';
import ice_cream_flavors_4_3 from '../assets/4_3/ice_cream_flavors.svg';
import ice_cream_flavors_19_5_9 from '../assets/19.5_9/ice_cream_flavors.svg';

import instruments_16_10 from '../assets/16_10/instruments.svg';
import instruments_16_9 from '../assets/16_9/instruments.svg';
import instruments_4_3 from '../assets/4_3/instruments.svg';
import instruments_19_5_9 from '../assets/19.5_9/instruments.svg';

import park_16_10 from '../assets/16_10/park.svg';
import park_16_9 from '../assets/16_9/park.svg';
import park_4_3 from '../assets/4_3/park.svg';
import park_19_5_9 from '../assets/19.5_9/park.svg';

import pizza_toppings_16_10 from '../assets/16_10/pizza_toppings.svg';
import pizza_toppings_16_9 from '../assets/16_9/pizza_toppings.svg';
import pizza_toppings_4_3 from '../assets/4_3/pizza_toppings.svg';
import pizza_toppings_19_5_9 from '../assets/19.5_9/pizza_toppings.svg';

import shapes_16_10 from '../assets/16_10/shapes.svg';
import shapes_16_9 from '../assets/16_9/shapes.svg';
import shapes_4_3 from '../assets/4_3/shapes.svg';
import shapes_19_5_9 from '../assets/19.5_9/shapes.svg';

import snacks_16_10 from '../assets/16_10/snacks.svg';
import snacks_16_9 from '../assets/16_9/snacks.svg';
import snacks_4_3 from '../assets/4_3/snacks.svg';
import snacks_19_5_9 from '../assets/19.5_9/snacks.svg';

import sports_16_10 from '../assets/16_10/sports.svg';
import sports_16_9 from '../assets/16_9/sports.svg';
import sports_4_3 from '../assets/4_3/sports.svg';
import sports_19_5_9 from '../assets/19.5_9/sports.svg';

import vegetables_16_10 from '../assets/16_10/vegetables.svg';
import vegetables_16_9 from '../assets/16_9/vegetables.svg';
import vegetables_4_3 from '../assets/4_3/vegetables.svg';
import vegetables_19_5_9 from '../assets/19.5_9/vegetables.svg';

import water_16_10 from '../assets/16_10/water.svg';
import water_16_9 from '../assets/16_9/water.svg';
import water_4_3 from '../assets/4_3/water.svg';
import water_19_5_9 from '../assets/19.5_9/water.svg';




function RelatedWordsBackground({ theme, children }: { theme: string; children: React.ReactNode }) {
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  const updateBackgroundImage = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const aspectRatio = screenWidth / screenHeight;
    type AspectRatioKey = '16_9' | '16_10' | '4_3' | '19_5_9';
    let aspect_ratio_key: AspectRatioKey = '16_9';

    // Adjusted aspect ratio handling to be more flexible for devices like iPads
    if (aspectRatio >= 1.77) {
      aspect_ratio_key = '16_9';
    } else if (aspectRatio >= 1.6) {
      aspect_ratio_key = '16_10';
    } else if (aspectRatio >= 1.33) {
      aspect_ratio_key = '4_3'; // This will cover iPads in portrait mode
    } else {
      aspect_ratio_key = '19_5_9'; // Added as a catch-all; adjust as necessary
    }



    const themeMap = {
      hot: { '16_9': hot_16_9, '16_10': hot_16_10, '4_3': hot_4_3, '19_5_9': hot_19_5_9 },
      cold: { '16_9': cold_16_9, '16_10': cold_16_10, '4_3': cold_4_3, '19_5_9': cold_19_5_9 },
      beach: { '16_9': beach_16_9, '16_10': beach_16_10, '4_3': beach_4_3, '19_5_9': beach_19_5_9 },
      breakfast_foods: { '16_9': breakfast_foods_16_9, '16_10': breakfast_foods_16_10, '4_3': breakfast_foods_4_3, '19_5_9': breakfast_foods_19_5_9 },
      desserts: { '16_9': desserts_16_9, '16_10': desserts_16_10, '4_3': desserts_4_3, '19_5_9': desserts_19_5_9 },
      fruits: { '16_9': fruits_16_9, '16_10': fruits_16_10, '4_3': fruits_4_3, '19_5_9': fruits_19_5_9 },
      ice_cream_flavors: { '16_9': ice_cream_flavors_16_9, '16_10': ice_cream_flavors_16_10, '4_3': ice_cream_flavors_4_3, '19_5_9': ice_cream_flavors_19_5_9 },
      instruments: { '16_9': instruments_16_9, '16_10': instruments_16_10, '4_3': instruments_4_3, '19_5_9': instruments_19_5_9 },
      park: { '16_9': park_16_9, '16_10': park_16_10, '4_3': park_4_3, '19_5_9': park_19_5_9 },
      pizza_toppings: { '16_9': pizza_toppings_16_9, '16_10': pizza_toppings_16_10, '4_3': pizza_toppings_4_3, '19_5_9': pizza_toppings_19_5_9 },
      shapes: { '16_9': shapes_16_9, '16_10': shapes_16_10, '4_3': shapes_4_3, '19_5_9': shapes_19_5_9 },
      snacks: { '16_9': snacks_16_9, '16_10': snacks_16_10, '4_3': snacks_4_3, '19_5_9': snacks_19_5_9 },
      sports: { '16_9': sports_16_9, '16_10': sports_16_10, '4_3': sports_4_3, '19_5_9': sports_19_5_9 },
      vegetables: { '16_9': vegetables_16_9, '16_10': vegetables_16_10, '4_3': vegetables_4_3, '19_5_9': vegetables_19_5_9 },
      water: { '16_9': water_16_9, '16_10': water_16_10, '4_3': water_4_3, '19_5_9': water_19_5_9 },
    };

    const validTheme = themeMap[theme as keyof typeof themeMap] ? theme : 'hot';
    setBackgroundImage(themeMap[validTheme as keyof typeof themeMap][aspect_ratio_key as keyof typeof themeMap['hot']]);



  };

  useEffect(() => {
    updateBackgroundImage();

    // Add event listener for window resize
    window.addEventListener('resize', updateBackgroundImage);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', updateBackgroundImage);
  }, [theme]); // This effect depends on the theme prop

  return (
    <Container maxWidth={false} sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'fit', 
      backgroundPosition: 'center', 
      width: '100%',
      height: '100vh',
      padding: '0',
      margin: '0',
      display: 'flex',
    }}>
      {children}
    </Container>
  );
}

export default RelatedWordsBackground;
