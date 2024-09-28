// Topbar.js
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import UserMenu from '../UserMenu';


const Topbar = () => {
  return (
    <nav className="topbar bg-secondary-blue">
      <Link href="/dashboard" className="flex items-center gap-4">
        <p className='text-3xl text-white font-bold max-xs:hidden'>NeuraNote</p>
      </Link>

      <div className="flex items-center gap-1">
        <UserMenu />
      </div>
    </nav>
  );
};

export default Topbar;