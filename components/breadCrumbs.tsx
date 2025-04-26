'use client'
// import { HomeIcon } from '@/icons'
// import Link from 'next/link'

// export const BreadCrumbs = () => {

// 	return (
// 		<div className='flex items-center gap-2 text-slate-500 text-sm font-medium '>
// 			<HomeIcon />
// 			<Link href='/' className=' hover:text-red-600 transition-colors duration-200 cursor-pointer' >Home</Link>
// 			<span>/</span>
// 			<Link href='/contact-us' className='text-slate-700 font-bold hover:text-red-600 transition-colors duration-200 cursor-pointer
// 			'>Contact Us</Link>
// 		</div>
// 	)
// }


import { HomeIcon } from '@/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

export const BreadCrumbs = () => {
  const pathname = usePathname();
  
  // Split the pathname into segments
  const segments = pathname.split('/').filter(segment => segment !== '');

  //=> hello-world => Hello World
  const formatSegment = (segment: string) => segment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  

  return (
    <div className="py-8 flex items-center gap-2 text-sm font-medium text-slate-500">
      <Link href="/" className="flex items-center gap-1 hover:text-red-600 transition-colors duration-200">
        <HomeIcon />
        <span>Home</span>
      </Link>

      {segments.map((segment, index) => {
        const href = '/' + segments.slice(0, index + 1).join('/');
        const isLast = index === segments.length - 1;
        
        return (
          <Fragment key={href}>
            <span>/</span>
            {isLast ? (
              <span className="text-slate-700 font-bold">
                {formatSegment(segment)}
              </span>
            ) : (
              <Link 
                href={href} 
                className="hover:text-red-600 transition-colors duration-200"
              >
                {formatSegment(segment)}
              </Link>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};






