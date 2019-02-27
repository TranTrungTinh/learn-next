import React from 'react';
import Link from 'next/link';
import '../styles/main.scss';

export default function index() {
  return (
    <div>
      Hello next
      <p className="text-red">Welcome here</p>
      <Link href="/about" as="about">
        <a>about</a>
      </Link>
      <Link href="/detail" as="detail">
        <a>detail</a>
      </Link>
    </div>
  )
}
