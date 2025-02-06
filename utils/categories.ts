import { IconType } from 'react-icons';
import { MdCabin } from 'react-icons/md';

import { TbCaravan, TbTent, TbBuildingCottage } from 'react-icons/tb';

import { GiWoodCabin, GiMushroomHouse } from 'react-icons/gi';
import { PiWarehouse, PiLighthouse, PiVan } from 'react-icons/pi';
import { MdOutlineLocalHotel } from "react-icons/md";
import { GoContainer } from 'react-icons/go';
import { RiHotelBedFill } from "react-icons/ri";
import { FaHotel } from "react-icons/fa";

import { FaHouseUser } from "react-icons/fa";
import { LuBackpack } from "react-icons/lu";
import { IoRestaurantSharp } from "react-icons/io5";

import { GiPathDistance } from "react-icons/gi";
import { IoMdHelp } from "react-icons/io";

import { RiInformationFill } from "react-icons/ri";

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel =
  | 'Albergue'
  | 'Pensiones'
  | 'Private Room'
  | 'Hotel'
  | 'Bag Collection'
  | 'Distance Calculator'
  | 'Camino Stages'
  | 'Camino Information'
  

export const categories: Category[] = [
  {
    label: 'Albergue',
    icon: MdOutlineLocalHotel,
  },
  
  {
    label: 'Pensiones',
    icon: RiHotelBedFill,
  },
  
  {
    label: 'Private Room',
    icon: FaHouseUser,
  },
    
  {
    label: 'Hotel',
    icon: FaHotel,
  },
  
  {
    label: 'Bag Collection',
    icon: LuBackpack,
  },
  
  {
    label: 'Camino Information',
    icon: RiInformationFill ,
  },
  
  {
    label: 'Distance Calculator',
    icon: GiPathDistance,
  },
  
  {
    label: 'Camino Stages',
    icon: IoMdHelp,
  },

  ];