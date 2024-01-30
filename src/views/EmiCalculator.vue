<template>
    <!-- <iframe
        src="https://emicalculator.net/"
        height="600"
        frameborder="0"
        style="width: 100%;"
      ></iframe> -->
  <div style="overflow: hidden; position: relative; width: 100%; padding: 0px;" class="mt-5 frame_container">
    <iframe scrolling="no" src="https://emicalculator.net/"></iframe>
  </div>
  </template>
  <style>
  .frame_container {
      height: 2550px;
  }
  iframe {
      height: 2700px; 
      width: 100%; 
      border: none; 
      transform: translateY(-5px);
  }
  @media screen and (min-width: 768px) {
    iframe {
      transform: translateY(-100px); /* Adjust the translation as needed */
    }
  }
  
  @media screen and (max-width: 767px) {
   
    .frame_container {
          height: 3100px !important; /* Adjust the height as needed */
      }
  }
  @media screen and (max-width: 468px) {
   
   .frame_container {
         height: 3200px !important; /* Adjust the height as needed */
     }
     
 }
 @media screen and (max-width: 468px) {
   
   .frame_container {
         height: 3300px !important; /* Adjust the height as needed */
     }
     
 }
  </style>
  