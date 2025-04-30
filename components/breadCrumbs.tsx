/* Method-3: truncate current page url only */
'use client'
import { HomeIcon } from '@/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

export const BreadCrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const formatSegment = (segment: string) => 
    segment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="py-8 flex items-center gap-2 text-sm font-medium text-slate-500 overflow-hidden">
      <Link href="/" className="flex-shrink-0 flex items-center gap-1 hover:text-red-600">
        <HomeIcon className="flex-shrink-0" />
        <span className="whitespace-nowrap">Home</span>
      </Link>

      {segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join('/')}`;
        const isLast = index === segments.length - 1;
        const formatted = formatSegment(segment);
        
        return (
          <Fragment key={href}>
            <span className="flex-shrink-0">/</span>
            {isLast ? (
              <span 
                className="text-slate-700 font-bold truncate max-w-[180px] md:max-w-lg"
                title={formatted}
              >
                {formatted}
              </span>
            ) : (
              <Link 
                href={href}
                className="hover:text-red-600 whitespace-nowrap flex-shrink-0"
              >
                {formatted}
              </Link>
            )}
          </Fragment>
        );
      })}
    </div>
  )
}













/* Method-1: No truncate any url

'use client'

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
*/


/* 	Method-2: Hide middle url if overflow, but current page's url not truncate
'use client'

import { HomeIcon } from '@/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useState } from 'react';

export const BreadCrumbs = () => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  
  // Split the pathname into segments
  const segments = pathname.split('/').filter(segment => segment !== '');

  // Format segment: hello-world => Hello World
  const formatSegment = (segment: string) => segment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Maximum segments to show before collapsing
  const maxSegments = 3;

  // Function to render breadcrumb segments
  const renderSegments = () => {
    if (expanded || segments.length <= maxSegments) {
      return segments.map((segment, index) => renderSegment(segment, index));
    }

    // Render first few segments, ellipsis, then last segment
    return (
      <>
        {segments.slice(0, maxSegments - 1).map((segment, index) => 
          renderSegment(segment, index)
        )}
        
        <Fragment key="ellipsis">
          <span>/</span>
          <button 
            onClick={() => setExpanded(true)}
            className="hover:text-red-600 transition-colors duration-200"
          >
            ...
          </button>
        </Fragment>
        
        {renderSegment(segments[segments.length - 1], segments.length - 1)}
      </>
    );
  };

  // Helper function to render a single segment
  const renderSegment = (segment: string, index: number) => {
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
  };

  return (
    <div className="py-8 flex items-center gap-2 text-sm font-medium text-slate-500">
      <Link href="/" className="flex items-center gap-1 hover:text-red-600 transition-colors duration-200">
        <HomeIcon />
        <span>Home</span>
      </Link>

      {renderSegments()}
    </div>
  );
};

*/





