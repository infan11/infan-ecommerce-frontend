

import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import useGadget from '../../Hooks/useGadget';
import AccessoriesCard from '../Accessories/AccessoriesCard/AccessoriesCard';
;

const AccessoriesItem = () => {
  const [gadgetProduct] = useGadget(null)
  const Headphones_Earbuds = gadgetProduct.filter(item => item.product_category  === "Headphones_Earbuds") 
  const Chargers_Adapters = gadgetProduct.filter(item => item.product_category  === "Chargers_Adapters") 
  const Power_Banks = gadgetProduct.filter(item => item.product_category  === "Power_Banks") 
  const Phone_Cases_Covers = gadgetProduct.filter(item => item.product_category  === "Phone_Cases_Covers") 
  const Screen_Protectors = gadgetProduct.filter(item => item.product_category  === "Screen_Protectors") 
  const Wireless_Chargers = gadgetProduct.filter(item => item.product_category  === "Wireless_Chargers") 
  const Keyboards = gadgetProduct.filter(item => item.product_category  === "Keyboards") 
  const Mice = gadgetProduct.filter(item => item.product_category  === "Mice") 
  const Portable_Speakers = gadgetProduct.filter(item => item.product_category  === "Portable_Speakers") 
  const Smart_Glasses = gadgetProduct.filter(item => item.product_category  === "Smart_Glasses") 
  const USB_Hubs_Docks  = gadgetProduct.filter(item => item.product_category  === "USB_Hubs_Docks") 
  const External_Hard_Drives  = gadgetProduct.filter(item => item.product_category  === "External_Hard_Drives") 
  const Memory_Cards  = gadgetProduct.filter(item => item.product_category  === "Memory_Cards") 
  const Stylus_Pens  = gadgetProduct.filter(item => item.product_category  === "Stylus_Pens") 
  const Wearable_Tech  = gadgetProduct.filter(item => item.product_category  === "Wearable_Tech") 
  const Laptop_Stands  = gadgetProduct.filter(item => item.product_category  === "Laptop_Stands") 
  const Backpacks_Bags  = gadgetProduct.filter(item => item.product_category  === "Backpacks_Bags") 
  const Cable_Organizers  = gadgetProduct.filter(item => item.product_category  === "Cable_Organizers") 
  const Camera_Accessories  = gadgetProduct.filter(item => item.product_category  === "Camera_Accessories") 
  const Gaming_Controllers  = gadgetProduct.filter(item => item.product_category  === "Gaming_Controllers") 
    return (
        <div className='md:px-10'>
        <SectionTitle heading={"Mens Category"} subHeading={"ITEMS"}/>
        <div>
        <Tabs className={"text-center "}>
<TabList className={"mt-5"}>
  <Tab>Headphones & Earbuds</Tab>
  <Tab>Chargers & Adapters</Tab>
  <Tab>Power Banks</Tab>
  <Tab>Phone Cases & Covers</Tab>
  <Tab>Screen Protectors</Tab>
  <Tab>Wireless Chargers</Tab>
  <Tab>Keyboards</Tab>
  <Tab>Portable_Speakers</Tab>
  <Tab>Smart Glasses</Tab>
  <Tab>USB Hubs & Docking Stations</Tab>
  <Tab>External Hard Drives</Tab>
  <Tab>Memory Cards</Tab>
  <Tab>Stylus Pens</Tab>
  <Tab>Wearable Tech</Tab>
  <Tab>Laptop Stands</Tab>
  <Tab>Backpacks & Bags</Tab>
  <Tab>Cable Organizers</Tab>
  <Tab>Camera Accessories</Tab>
  <Tab>Gaming Controllers</Tab>
  
</TabList>

<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Headphones_Earbuds.map(item => <AccessoriesCard key={item._id} item={item}></AccessoriesCard>)
  }
 </div>
</TabPanel>

<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
  Chargers_Adapters.map(item => <AccessoriesCard key={item._id} item={item}></AccessoriesCard>)
  }
 </div>
</TabPanel>

<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Power_Banks.map(item => <AccessoriesCard key={item._id} item={item}></AccessoriesCard>)
  }
 </div>
</TabPanel>

<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Phone_Cases_Covers.map(item => <AccessoriesCard key={item._id} item={item}></AccessoriesCard>)
  }
 </div>
</TabPanel>
<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Screen_Protectors.map(item => <AccessoriesCard key={item._id} item={item}></AccessoriesCard>)
  }
 </div>
</TabPanel>

<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Wireless_Chargers.map(item => <AccessoriesCard key={item._id} item={item}></AccessoriesCard>)
  }
 </div>
</TabPanel>

<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Keyboards.map(item => <AccessoriesCard key={item._id} item={item}></AccessoriesCard>)
  }
 </div>
</TabPanel>

<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Headphones_Earbuds.map(item => <AccessoriesCard key={item._id} item={item}></AccessoriesCard>)
  }
 </div>
</TabPanel>

<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Mice.map(item => <AccessoriesCard key={item._id} item={item}></AccessoriesCard>)
  }
 </div>
</TabPanel>

<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Portable_Speakers.map(item => <AccessoriesCard key={item._id} item={item}></AccessoriesCard>)
  }
 </div>
</TabPanel>

<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Smart_Glasses.map(item => <AccessoriesCard key={item._id} item={item}></AccessoriesCard>)
  }
 </div>
</TabPanel>
<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    USB_Hubs_Docks.map(item => <AccessoriesCard key={item._id} item={item}></AccessoriesCard>)
  }
 </div>
</TabPanel>
<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    External_Hard_Drives.map(item => <AccessoriesCard key={item._id} item={item}></AccessoriesCard>)
  }
 </div>
</TabPanel>
<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Memory_Cards.map(item => <AccessoriesCard key={item._id} item={item}></AccessoriesCard>)
  }
 </div>
</TabPanel>
<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Stylus_Pens.map(item => <AccessoriesCard key={item._id} item={item}></AccessoriesCard>)
  }
 </div>
</TabPanel>
<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Wearable_Tech.map(item => <AccessoriesCard key={item._id} item={item}></AccessoriesCard>)
  }
 </div>
</TabPanel>
<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Laptop_Stands.map(item => <AccessoriesCard key={item._id} item={item}></AccessoriesCard>)
  }
 </div>
</TabPanel>
<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Backpacks_Bags.map(item => <AccessoriesCard key={item._id} item={item}></AccessoriesCard>)
  }
 </div>
</TabPanel>
<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Cable_Organizers.map(item => <AccessoriesCard key={item._id} item={item}></AccessoriesCard>)
  }
 </div>
</TabPanel>
<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Camera_Accessories.map(item => <AccessoriesCard key={item._id} item={item}></AccessoriesCard>)
  }
 </div>
</TabPanel>
<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Gaming_Controllers.map(item => <AccessoriesCard key={item._id} item={item}></AccessoriesCard>)
  }
 </div>
</TabPanel>



</Tabs>
        </div>
    </div>
    );
};

export default AccessoriesItem;