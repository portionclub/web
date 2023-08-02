import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import Tilt from 'react-parallax-tilt';

import Layout from '../components/layout/Layout';
import Seo from '../components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

const Project = ({ href, image, title, description }) => {
  return (
    <Link
      href={href}
      className='hover:active mt-4 block origin-top-right text-2xl transition-all duration-500 hover:scale-125 hover:brightness-100 sm:text-4xl sm:brightness-[.9]'
    >
      <Tilt
        className='relative mb-40 aspect-[2/3] max-w-[314px]'
        style={{
          transformStyle: 'preserve-3d',
          transform: 'perspective(1000px)',
        }}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        trackOnWindow={false}
        tiltReverse={true}
        perspective={1000}
        transitionSpeed={1500}
        scale={1.04}
      >
        <Image
          src={image}
          alt='inkblot'
          width='3133'
          height='1304'
          className='mb-6 w-full object-contain object-top'
        />
        <div className='glitch'>
          <div className='text-xl'>{title}</div>
          <div className='text-xs'>{description}</div>
        </div>
      </Tilt>
    </Link>
  );
};

const PROJECTS = [
  {
    href: '/projects/aight',
    image: '/images/aight/page-thumbnail.png',
    title: 'AIGHT SKATE 📼 TAPE + NFT',
    description:
      "ARTIST: Jonathan Hall \n📼 TITLE: AIGHT TAPE\n\nSUPPLY: 5 EDITIONS  \nHOLDERS OF AIGHT: SKATE 📼 TAPE (NFT) ARE WELCOME TO REDEEM FOR PHYSICAL  📼  (VHS)\n\n\n\nAIGHT📼 TAPE RELEASE INCLUDES:\n\n- 1 SKATE VIDEO RIPPED TO 5 UNIQUE VHS TAPES \n- 5 VIDEO NFT EDITIONS via PC69\n- 5 3D NFT's viadesigned by John Hall",
  },
  {
    title: 'portion club dao',
    href: 'https://nouns.build/dao/0x0c12aba58fc88f1267fa772012495b47aaf31cab',
    image: '/images/dao/page-thumbnail.png',
    description: 'portion club dao',
  },
  {
    title: 'Dark Web by Taifa',
    href: '/projects/darkweb',
    image: '/images/darkweb/page-thumbnail.png',
    description: 'Dark Web \nby Taifa\nCatalog Genesis',
  },
  {
    title: 'Gm',
    href: 'https://beta.catalog.works/rickylake/gm',
    image: '/images/gm/page-thumbnail.png',
    description:
      'Ricky Lake released 1st NFT "Gm" on Catalog\nfollowed by video on Zora\nCover art by Studio_Dad',
  },
  {
    title: 'LAWBSTARZ',
    href: 'https://www.scatter.art/lawbstarz',
    image: '/images/lawbstarz/page-thumbnail.png',
    description:
      '☆ LAWBSTARZ 666x LOBSTERS DRIPPED IN BUTTER ☆ 666x PREMIUM PFP COLLECTION ☆ LAWBSTARZ IS A MUSIC NFT ☆ LAWBSTARZ IS AN ALLSTARZ DERIVATIVE ☆ LAWBSTARZ IS INSPIRED BY REMILIA CORP ☆ LED BY NETWORK SPIRITUALITY ☆ 666 CIGAWRETTEPACKS WERE CONSUMED BY PORTIONCLUB69 AND FRIENDS DURING THE CREATION OF LAW',
  },
  {
    title: 'VOXELS',
    href: 'https://www.voxels.com/play?coords=SW@14W,5052N',
    image: '/public/images/voxel/pcvoxel1_1.gif',
    description:
      'PORTION CLUB VOXELS PLOT (SICK.SHIT.ONLY.) LIVE MUSIC + MERCH + $SCOOP SHOP! SIGN GUEST BOOK ON 2ND FLOOR!',
  },
];

export default function HomePage() {
  return (
    <Layout hideNav>
      <h1>Projects</h1>
      <div className='mx-20 mb-20 flex w-full flex-wrap space-x-8'>
        <Seo templateTitle='Projects' />
        {PROJECTS.map((project) => (
          <Project key={project.href} {...project} />
        ))}
      </div>
    </Layout>
  );
}
