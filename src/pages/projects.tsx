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
    title: 'PC TAPE VOL1',
    href: 'https://zora.co/collect/eth:0xd0c4c3c6297f5bff0ff358d66483f8481a184236',
    image: '/images/pctapev1/pctapevol1.png',
    description: 'PORTION CLUB MIXTAPE VOLUME 1',
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
    image: '/images/lawbstarz/lawbstarz_tease 2.gif',
    description:
      '☆ LAWBSTARZ 666x LOBSTERS DRIPPED IN BUTTER ☆ 666x PREMIUM PFP COLLECTION ☆ LAWBSTARZ IS A MUSIC NFT ☆ LAWBSTARZ IS AN ALLSTARZ DERIVATIVE ☆ LAWBSTARZ IS INSPIRED BY REMILIA CORP ☆ LED BY NETWORK SPIRITUALITY ☆ 666 CIGAWRETTEPACKS WERE CONSUMED BY PORTIONCLUB69 AND FRIENDS DURING THE CREATION OF LAW',
  },
  {
    title: 'lawbsters',
    href: 'https://zora.co/collect/eth:0x0ef7ba09c38624b8e9cc4985790a2f5dbfc1dc42',
    image: '/images/lawbsters/lawbsterss.webp',
    description:
      'lawbsters seem nice but a human run by a lobster will never amout to anything without a roadmap.',
  },
  {
    title: 'VOXELS',
    href: 'https://www.voxels.com/play?coords=SW@14W,5052N',
    image: '/images/voxel/pc_builder_6.gif',
    description:
      'PORTION CLUB VOXELS PLOT (SICK.SHIT.ONLY.) LIVE MUSIC + MERCH + $SCOOP SHOP! SIGN GUEST BOOK ON 2ND FLOOR!',
  },
  {
    title: 'ONCYBER GALLERY',
    href: 'https://www.oncyber.com/portionclub',
    image: '/images/oncyber/oncyber_loop.gif',
    description:
      '3D GALLERY DISPLAYING SOME ART PRODUCED BY OR COLLECTED BY PC69',
  },
  {
    title: 'XTRAFORMS v.3',
    href: 'https://zora.co/collect/eth:0xde86c77cbe7e479b0a0ec1ff6a6017236e35f14a',
    image: '/images/xtraforms3/xtraforms3_xdrar.gif',
    description: 'ANIMATED COLLECTION BY XDrar minting on Zora',
  },
  {
    href: '/projects/aight',
    image: '/images/aight/page-thumbnail.png',
    title: 'AIGHT SKATE 📼 TAPE + NFT',
    description:
      "ARTIST: Jonathan Hall \n📼 TITLE: AIGHT TAPE\n\nSUPPLY: 5 EDITIONS  \nHOLDERS OF AIGHT: SKATE 📼 TAPE (NFT) ARE WELCOME TO REDEEM FOR PHYSICAL  📼  (VHS)\n\n\n\nAIGHT📼 TAPE RELEASE INCLUDES:\n\n- 1 SKATE VIDEO RIPPED TO 5 UNIQUE VHS TAPES \n- 5 VIDEO NFT EDITIONS via PC69\n- 5 3D NFT's viadesigned by John Hall",
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
