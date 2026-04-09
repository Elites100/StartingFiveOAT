import curry1 from '/Stephen-Curry-Shot.gif';
import curry2 from '/Stephen-Curry-Layup.gif';
import curry3 from '/Stephen-Curry-Sleep.gif';

import jordan1 from '/Micheal-Jordan-Dunk.gif';
import jordan2 from '/Micheal-Jordan-Shrug.gif';
import jordan3 from '/Micheal-Jordan-Championship.gif';

import lebron1 from '/Lebron-James-Layup.gif';
import lebron2 from '/Lebron-James-Dunk.gif';
import lebron3 from '/Lebron-James-Warmup.gif';

import duncan1 from '/Tim-Duncan-Shot.gif';
import duncan2 from '/Tim-Duncan-Walk.gif';
import duncan3 from '/Tim-Duncan-Celebration.gif';

import wemby1 from '/Victor-Wembanyama-Costume.gif';
import wemby2 from '/Victor-Wembanyama-Block.gif';
import wemby3 from '/Victor-Wembanyama-Dunk.gif';

export const playerScenes = {
    Curry: [
    {
      src: curry1,
      offsetX: -460,
      offsetY: -190,
      rotate: -8,
    },
    {
      src: curry2,
      offsetX: -10,
      offsetY: -300,
      rotate: 2,
    },
    {
      src: curry3,
      offsetX: 430,
      offsetY: -100,
      rotate: -4,
    },
  ],
  Jordan: [
    {
      src: jordan1,
      offsetX: -500,
      offsetY: -100,
      rotate: 3,
    },
    {
      src: jordan2,
      offsetX: -10,
      offsetY: -270,
      rotate: -4,
    },
    {
      src: jordan3,
      offsetX: 400,
      offsetY: -70,
      rotate: -2,
    },
  ],
  James: [
    {
      src: lebron1,
      offsetX: -420,
      offsetY: -110,
      rotate: -5,
    },
    {
      src: lebron2,
      offsetX: 50,
      offsetY: -200,
      rotate: 4,
    },
    {
      src: lebron3,
      offsetX: 450,
      offsetY: 20,
      rotate: 10,
    },
  ],
  Duncan: [
    {
      src: duncan1,
      offsetX: -500,
      offsetY: -10,
      rotate: -5,
    },
    {
      src: duncan2,
      offsetX: -10,
      offsetY: -100,
      rotate: 3,
    },
    {
      src: duncan3,
      offsetX: 370,
      offsetY: 200,
      rotate: -7,
    },
  ],
  Wembanyama: [
    {
      src: wemby1,
      offsetX: -450,
      offsetY: 100,
      rotate: -2,
    },
    {
      src: wemby2,
      offsetX: -100,
      offsetY: -20,
      rotate: -3,
    },
    {
      src: wemby3,
      offsetX: 350,
      offsetY: 250,
      rotate: 2,
    },
  ],
  // additional players can be added here later
};
