import {
  Droplets,
  Sofa,
  CloudFog,
  Sparkles,
  LayoutDashboard,
  Wind,
  CircleDot,
  Sun,
  ShieldCheck,
  Gem,
  type LucideIcon,
} from 'lucide-react';

export const BUSINESS = {
  name: 'D 4 Detailing Car Noida',
  phone: '08130826066',
  phoneTel: '+918130826066',
  whatsapp: '918130826066',
  address:
    'Faridabad - Noida - Ghaziabad Expressway, Near Police Chowki, Chhijarsi, Chhajarsi Colony, Sector 63, Noida, Uttar Pradesh 201309',
  mapsLink: 'https://maps.app.goo.gl/NLyjRnWt1yCBrsny8',
  mapsEmbed:
    'https://www.google.com/maps?q=Sector%2063%20Noida%20Uttar%20Pradesh%20201309&output=embed',
};

export interface Service {
  name: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

export const SERVICES: Service[] = [
  {
    name: 'Exterior Car Wash',
    description:
      'A thorough exterior wash that lifts away dirt, dust and road grime to restore your car’s original shine.',
    image:
      'https://images.pexels.com/photos/5233271/pexels-photo-5233271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Droplets,
  },
  {
    name: 'Interior Deep Cleaning',
    description:
      'Detailed cleaning of seats, mats, dashboard and every corner of your cabin for a fresh, hygienic interior.',
    image:
      'https://images.pexels.com/photos/17029940/pexels-photo-17029940.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Sofa,
  },
  {
    name: 'Foam Wash',
    description:
      'A rich foam wash that clings to the surface, loosening contaminants for a gentle yet effective clean.',
    image:
      'https://images.pexels.com/photos/4870739/pexels-photo-4870739.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: CloudFog,
  },
  {
    name: 'Complete Car Detailing',
    description:
      'A comprehensive top-to-bottom detailing treatment designed to refresh and revive your entire vehicle.',
    image:
      'https://images.pexels.com/photos/6872176/pexels-photo-6872176.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Sparkles,
  },
  {
    name: 'Dashboard Cleaning',
    description:
      'Careful cleaning and dressing of your dashboard and panels to bring back a clean, well-kept look.',
    image:
      'https://images.pexels.com/photos/6873015/pexels-photo-6873015.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: LayoutDashboard,
  },
  {
    name: 'Interior Vacuum Cleaning',
    description:
      'Deep vacuuming of seats, carpets and crevices to remove dust, crumbs and trapped debris.',
    image:
      'https://images.pexels.com/photos/6873119/pexels-photo-6873119.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Wind,
  },
  {
    name: 'Tyre and Alloy Cleaning',
    description:
      'Targeted cleaning of tyres and alloy wheels to remove brake dust and restore a sharp, finished look.',
    image:
      'https://images.pexels.com/photos/7154618/pexels-photo-7154618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: CircleDot,
  },
  {
    name: 'Car Polishing',
    description:
      'Polishing designed to reduce the look of fine marks and bring out a smooth, glossy finish.',
    image:
      'https://images.pexels.com/photos/6870296/pexels-photo-6870296.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Sun,
  },
  {
    name: 'Paint Protection',
    description:
      'A protective layer that helps shield your car’s paint from everyday dust, dirt and light wear.',
    image:
      'https://images.pexels.com/photos/7154635/pexels-photo-7154635.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: ShieldCheck,
  },
  {
    name: 'Ceramic Coating',
    description:
      'A long-lasting ceramic layer that adds depth and gloss while helping repel water and dirt.',
    image:
      'https://images.pexels.com/photos/10463764/pexels-photo-10463764.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Gem,
  },
];

export const GALLERY = [
  {
    src: 'https://images.pexels.com/photos/14023349/pexels-photo-14023349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Black car being cleaned with a power spray',
  },
  {
    src: 'https://images.pexels.com/photos/4870724/pexels-photo-4870724.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Soap suds on a black car door during a wash',
  },
  {
    src: 'https://images.pexels.com/photos/6872591/pexels-photo-6872591.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Snow foam being sprayed onto a car',
  },
  {
    src: 'https://images.pexels.com/photos/6873015/pexels-photo-6873015.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Interior steering wheel being wiped clean',
  },
  {
    src: 'https://images.pexels.com/photos/14231684/pexels-photo-14231684.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Black car being polished with a buffing machine',
  },
  {
    src: 'https://images.pexels.com/photos/39370861/pexels-photo-39370861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Shiny alloy rim on a parked black car',
  },
  {
    src: 'https://images.pexels.com/photos/14615260/pexels-photo-14615260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Hand polishing a shiny car with a microfiber cloth',
  },
  {
    src: 'https://images.pexels.com/photos/14231678/pexels-photo-14231678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Luxury car wheel covered in soap suds',
  },
];

export const BEFORE_AFTER = [
  {
    before:
      'https://images.pexels.com/photos/15040066/pexels-photo-15040066.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    after:
      'https://images.pexels.com/photos/27317283/pexels-photo-27317283.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'Exterior Wash',
  },
  {
    before:
      'https://images.pexels.com/photos/576332/pexels-photo-576332.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    after:
      'https://images.pexels.com/photos/6873015/pexels-photo-6873015.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'Interior Cleaning',
  },
  {
    before:
      'https://images.pexels.com/photos/30682118/pexels-photo-30682118.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    after:
      'https://images.pexels.com/photos/14231684/pexels-photo-14231684.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'Paint Polishing',
  },
];
