"use client"
import React, { useState } from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import AddTasks from '@/Components/Add';
const Page = () => {
  return(
    <>
      <Header/>
      <AddTasks/>
      <Footer/>
    </>
  )
}

export default Page